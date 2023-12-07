/* eslint no-console: "off" */
import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:3002`, // Por el momento solo obtendré el video con id 1
});

export default api;