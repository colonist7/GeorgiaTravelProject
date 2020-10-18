import { UserInformation } from '../../Models/AuthModels';
import { IAction } from '../../Models/Common';

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

export const ContactReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case LOGIN:
			return { ...state };
		case SET_AUTH:
			return { ...state };
		case SEND_REGISTER:
			return { ...state, userInfo: action.payload };
		case CONFIRM_PASSWORD:
			return { ...state };
		default:
			return state;
	}
};

export const register = (formData: UserInformation) => (dispatch: any) => {
	//SOME API CALL
	dispatch({ type: SEND_REGISTER, payload: formData });
};
