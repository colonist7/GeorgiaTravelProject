import axios from 'axios';
import env from '../env.json';

const BaseURL = env.apiUrl;

export const RestMethod = {
	POST: 'POST',
	GET: 'GET',
	DELETE: 'DELETE',
	UPDATE: 'UPDATE',
};

interface IRestConfig {
	path: string;
	request?: any;
	dynamicHeaders?: string;
}

export const RestFunc = (
	config: IRestConfig = { path: '', request: RestMethod.GET, dynamicHeaders: '' },
	pathVariables?: any,
	bodyPayload?: any
) => {
	const parsePath = (): void => {
		let params = config.path.match(/{.+?}/g);
		let newPath = config.path;

		if (params) {
			for (let param of params) {
				const name = param.replace(/{/, '').replace(/}/, '');
				newPath = newPath.replace(param, pathVariables[name]);
			}
		}
		config.path = newPath;
	};

	const init = () => {
		parsePath();
		return axios({
			method: config.request,
			url: BaseURL + config.path,
			data: { ...bodyPayload },
		});
	};

	return init();
};
