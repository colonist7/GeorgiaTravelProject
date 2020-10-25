import { RestFunc, RestMethod } from '../Engine/ResourceEngine';
import { LoginData, RegisterData } from '../Models/AuthModels';

export const SendLogin = (formdata: LoginData) =>
	RestFunc(
		{
			path: '/login',
			request: RestMethod.POST,
		},
		undefined,
		formdata
	);

export const SendRegister = (formdata: RegisterData) =>
	RestFunc(
		{
			path: '/register',
			request: RestMethod.POST,
		},
		undefined,
		formdata
	);
