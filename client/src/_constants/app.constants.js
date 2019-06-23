const env = process.env;

export const SERVER_URL = env.PORT || '/';
export const PUBLIC_URL = '';
export const FETCH_TIMEOUT = 30000;

export const API_TOKEN = '$2a$10$AEDtG/lFIDxqihLogHRH0.vBQTQ/v0K95caa0oe8UIbdDyyxvMPey';
export const API_KEY = `secret-key=${API_TOKEN}`;

export default {
  SERVER_URL,
  PUBLIC_URL,
  FETCH_TIMEOUT,
  API_KEY,
  API_TOKEN,
};
