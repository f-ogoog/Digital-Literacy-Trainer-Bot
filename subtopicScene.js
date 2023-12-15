import {Scenes, Markup, session} from "telegraf";
import { themes } from "./themes.js";

export const subtopicScene= new Scenes.BaseScene('subtopic');

subtopicScene.enter(async (ctx) => {
  const index = session.index;
  const subtopics_index = session.subtopic_index;
  const text = themes[index-1].subtopics[subtopics_index-1].subtopic + '\n\n' + themes[index-1].subtopics[subtopics_index-1].text;
  await ctx.reply(text, Markup.keyboard(['Повернутись назад']).oneTime().resize());
})

subtopicScene.hears('Повернутись назад', (ctx) => {
  session.subtopic_index = undefined;
  return ctx.scene.enter('subtopics');
});