import TelegramBot from 'node-telegram-bot-api';
import { messegerConstants } from './constants';

const telegramBot = new TelegramBot(messegerConstants.TELEGRAM_TOKEN, { polling: { interval: 1000 }});

export default telegramBot;
