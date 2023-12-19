import {Markup, Scenes, session} from "telegraf";
import {themes} from "./themes.js";

export const testScene = new Scenes.BaseScene('test');

testScene.enter(async (ctx) => {
  const theme = session.theme;
  const test = session.test;
  const text = themes[theme].test[test].text
    + '\n\nВараінти:'
    + '\nA: ' + themes[theme].test[test].variants['A']
    + '\nB: ' + themes[theme].test[test].variants['B']
    + '\nC: ' + themes[theme].test[test].variants['C'];

  await ctx.reply(text, Markup.keyboard([['A', 'B', 'C']]).oneTime().resize());
});

testScene.on('text',async (ctx) => {
  const text = ctx.message.text;
  const theme = session.theme;
  const test = session.test;
  const answer = themes[theme].test[test].answer;

  if (text === answer) {
    ctx.reply('🟩 Правильна відповідь');
    session.correctAnswersCount += 1;
    await ctx.scene.enter('tests');
  } else if (['A', 'B', 'C'].includes(text)) {
    ctx.reply(`🟥 Не правильна відповідь;
       Правильна: ${answer}`);
    await ctx.scene.enter('tests');
  } else {
    await ctx.reply('Пішов нахуй розбійниу')
  }
});