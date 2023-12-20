import { Markup, Scenes, session } from 'telegraf';
import { themes } from './themes.js';

export const themesScene = new Scenes.BaseScene('themes');

themesScene.enter(async (ctx) => {
  const text = themes.reduce((text, theme, index) => text + `${index+1}: ${theme.title}\n`, 'Теми:\n\n');
  await ctx.reply(text, Markup.keyboard(['Повернутись назад']).oneTime().resize());
})

themesScene.hears('Повернутись назад',async (ctx) => {
  session.index = undefined;
  const text = `Для початку навчання, або перевірки ваших знань з цифровій грамотності, натисність:
  👉🏻 Обрати тему                                            
  👉🏻Пройти тестуванн`
  await ctx.reply(text, Markup.inlineKeyboard([
    Markup.button.callback('Обрати тему', 'themes'),
    Markup.button.callback('Пройти тестування', 'test'),
  ]).oneTime().resize());
  return ctx.scene.leave();
});

themesScene.on('text', async (ctx) => {
  const index = +ctx.message.text;
  if (!Number.isInteger(index) || index < 1 || index > themes.length) {
    ctx.reply('Введіть коректні дані');
  } else {
    session.index = index;
    await ctx.scene.enter('subtopics');
  }
});

