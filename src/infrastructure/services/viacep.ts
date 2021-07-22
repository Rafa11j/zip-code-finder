import axios from 'axios';

export const viaCepApi = axios.create({
  baseURL: process.env.VIA_CEP_API_URL,
});
