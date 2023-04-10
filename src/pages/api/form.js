import nextConnect from "next-connect";
import multer from "multer";
import bot from "@/lib/bot";

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method "${req.method}" Not Allowed` });
  }
});

apiRoute.use(multer().any());

apiRoute.post((req, res) => {
  try {
    const { fullName, contact, description } = req.body;

    bot.on("message", async msg => {
      const text = msg.text;
      const chatId = msg.chat.id;

      await bot.sendMessage(chatId, fullName);
    });

    res.status(200).json({ status: "Форма успешно отправлена" });
  } catch {
    res.status(500).json({ status: "Что-то пошло не так" });
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: true
  }
};
