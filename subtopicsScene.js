import {Scenes, Markup, session} from "telegraf";
import { themes } from "./themes.js";

export const subtopicsScene= new Scenes.BaseScene('subtopics');

subtopicsScene.enter(async (ctx) => {
  const index = session.index;
  let text = themes[index-1].title + '\n\n' + themes[index-1].text + '\n\nПід теми:'
  text += themes[index-1].subtopics.reduce((text, subtopic, index) => text + `${index+1}: ${subtopic.subtopic}\n`, '\n\n')
  await ctx.reply(text, Markup.keyboard([['Тестування', 'Повернутись назад']]).oneTime().resize());
})

subtopicsScene.hears('Повернутись назад', async (ctx) => {
  return ctx.scene.enter('themes');
});

subtopicsScene.on('text', async (ctx) => {
  const index = session.index;
  const subtopic_index = +ctx.message.text;
  if (isNaN(subtopic_index) || subtopic_index < 1 || subtopic_index > themes[index-1].subtopics.length) {
    ctx.reply('Пішов нахуй розбійник');
  } else {
    session.subtopic_index = subtopic_index;
    await ctx.scene.enter('subtopic');
  }
});