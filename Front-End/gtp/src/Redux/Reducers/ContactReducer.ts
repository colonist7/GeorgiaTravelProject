import { IAction } from '../../Models/Common';
import { ContactInformation } from '../../Models/ContactModels';

const FETCH_CONTACT_INFORMATION = 'FETCH_CONTACT_INFORMATION';

export interface ContactState {
	contactInformation: ContactInformation;
}

const initialState: ContactState = {
	contactInformation: {},
};

export const ContactReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case FETCH_CONTACT_INFORMATION:
			return { ...state, contactInformation: action.payload };
		default:
			return state;
	}
};

export const fetchContactInformation = () => (dispatch: any) => {
	//SOME API CALL
	const MockInfo = {
		phone: '555-55-55-55',
		city: 'Tbilisi',
		address: 'Rustaveli ave. 36',
		email: 'info@wildgeorgia.com',
	};

	dispatch({ type: FETCH_CONTACT_INFORMATION, payload: MockInfo });
};
