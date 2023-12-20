import { Markup, Scenes, session } from 'telegraf';
import { themes } from './themes.js';
import { getRandomArbitrary } from './Utils.js';

export const testsScene = new Scenes.BaseScene('tests');

const Count = 12;
const duplication = []

async function getRandomQuestion (ctx) {
  if (session.questionCount >= Count) {
    duplication.length = 0;

    const results = `Ваш результат: ${ session.correctAnswersCount }/12 (${ parseInt((session.correctAnswersCount/12) * 100) }%)`;
    ctx.reply(results);

    const text = `Для початку навчання, або перевірки ваших знань з цифровій грамотності, натисність:
  👉🏻 Обрати тему                                            
  👉🏻Пройти тестуванн`;
    await ctx.reply(text, Markup.inlineKeyboard([
      Markup.button.callback('Обрати тему', 'themes'),
      Markup.button.callback('Пройти тестування', 'test'),
    ]).oneTime().resize());
    return;
  }

  session.theme = getRandomArbitrary(0, themes.length-1);
  session.test = getRandomArbitrary(0, themes[session.theme].test.length-1);

  const isDuplicate = duplication.some(([theme, test]) => theme === session.theme && test === session.test);
  if (isDuplicate) {
    await getRandomQuestion(ctx);
  } else {
    duplication.push([session.theme, session.test]);

    session.questionCount += 1;
    await ctx.scene.enter('test');
  }
}

async function getThemeQuestion (ctx) {
  const theme = session.index - 1;

  if (session.questionCount >= themes[theme].test.length) {
    duplication.length = 0;

    const results = `Ваш результат: ${session.correctAnswersCount}/${themes[theme].test.length} (${parseInt((session.correctAnswersCount/themes[theme].test.length) * 100)}%)`;
    await ctx.reply(results);

    await ctx.scene.enter('subtopics');
  } else {
    session.theme = session.index - 1;
    session.test = session.questionCount;
    session.questionCount += 1;
    await ctx.scene.enter('test');
  }
}

testsScene.enter(async (ctx) => {
  if (session.index === undefined) {
    await getRandomQuestion(ctx);
  } else {
    await getThemeQuestion(ctx);
  }
})