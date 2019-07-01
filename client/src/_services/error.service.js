import axios from '../_helpers/axios';
import { errorConstants } from '../_constants';

const sendErrorInfoToServer = (error, info) => axios.post(`${errorConstants.ERROR_URL}`, { error, info });

export default {
  sendErrorInfoToServer,
};
