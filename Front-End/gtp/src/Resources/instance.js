import * as axios from 'axios';
import env from '../../env.json';

const instance = axios.create({
	// withCredentials: true,
	baseURL: env.apiUrl,
	proxy: {
		host: 'http://localhost',
		port: 3000,
	},
	headers: {
		'Access-Control-Allow-Origin': '*',
	},
});

export default instance;
