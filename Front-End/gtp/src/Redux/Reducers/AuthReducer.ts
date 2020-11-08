import { RestFunc } from '../../Engine/ResourceEngine';
import { LoginData, RegisterData, UserInformation } from '../../Models/AuthModels';
import { IAction } from '../../Models/Common';
import { SendLogin, SendRegister } from '../../Resources/AuthResource';

const LOGIN = 'LOGIN';
const SET_AUTH = 'SET_AUTH';
const SEND_REGISTER = 'SEND_REGISTER';
const CONFIRM_PASSWORD = 'CONFIRM_PASSWORD';

interface AuthStore {
	authToken: string;
	isAuthenticated: boolean;
	userInfo: UserInformation;
}

const initialState: AuthStore = {
	authToken: '',
	isAuthenticated: false,
	userInfo: {},
};

export const AuthReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case LOGIN:
			return { ...state };
		case SET_AUTH:
			return { ...state, authToken: action.payload };
		case SEND_REGISTER:
			return { ...state, userInfo: action.payload };
		case CONFIRM_PASSWORD:
			return { ...state };
		default:
			return state;
	}
};

export const sendRegister = (formData: RegisterData) => (dispatch: any) => {
	SendRegister(formData).then((res: any) => {
		dispatch({ type: SEND_REGISTER, payload: res.body.authToken });
	});
};

export const sendLogin = (formData: LoginData) => (dispatch: any) => {
	SendLogin(formData).then((res: any) => {
		dispatch({ type: LOGIN, payload: res.body.authToken });
	});
};
