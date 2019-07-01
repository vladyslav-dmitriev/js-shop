import telegramBot from '../telegram';
import { messegerConstants } from '../constants';

const ErrorController = {
  async send(req, res) {
    try {
      const { error, info } = req.body;
      const telegramMessage = `
Возникла ошибка
${error}
info: ${info}`;

      await telegramBot.sendMessage(
        messegerConstants.TELEGRAM_PROFILE,
        telegramMessage,
        messegerConstants.TELEGRAM_SETTINGS
      );
      await res.send();
    } catch (err) {
      res.status(500).send(err);
    }
  },
};

export default ErrorController;
