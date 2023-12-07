/* eslint no-console: "off" */
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT_BACKEND || 3002;

const api = axios.create({
    baseURL: `http://localhost:${port}`, // Por el momento solo obtendré el video con id 1
});

export default api;