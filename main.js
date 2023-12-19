import {Markup, Scenes, session, Telegraf} from "telegraf";
import 'dotenv/config';
import { themesScene } from "./themesScene.js";
import {subtopicsScene} from "./subtopicsScene.js";
import {subtopicScene} from "./subtopicScene.js";
import {testsScene} from "./testsScene.js";
import {testScene} from "./testScene.js";

const stage = new Scenes.Stage([themesScene, subtopicsScene, subtopicScene, testsScene, testScene]);

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.use(session());
bot.use(stage.middleware());

bot.start(async (ctx) => {
  const text = `Для початку навчання, або перевірки ваших знань з цифровій грамотності, натисність:
  👉🏻 Обрати тему                                            
  👉🏻Пройти тестуванн`;
  await ctx.reply(text, Markup.inlineKeyboard([
    Markup.button.callback('Обрати тему', 'themes'),
    Markup.button.callback('Пройти тестування', 'test'),
  ]).oneTime().resize());
});

bot.action('themes', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.scene.enter('themes');
});

bot.action('test', async (ctx) => {
  await ctx.answerCbQuery();
  session.questionCount = 0;
  session.correctAnswersCount = 0;
  await ctx.scene.enter('tests');
});

bot.launch();