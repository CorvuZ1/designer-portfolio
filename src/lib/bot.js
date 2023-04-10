const TelegramBot = require("node-telegram-bot-api");

const { TELEGRAM_BOT_TOKEN } = process.env;

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

bot.on("message", async msg => {
  const text = msg.text;
  const chatId = msg.chat.id;

  await bot.sendMessage(chatId, "Подписка");
});

module.exports = bot;
