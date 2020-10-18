import * as axios from 'axios';

const instance = axios.create({
	// withCredentials: true,
	baseURL: 'http://localhost:3000/',
	proxy: {
		host: 'http://localhost',
		port: 3000,
	},
	headers: {
		'Access-Control-Allow-Origin': '*',
	},
});

export default instance;
