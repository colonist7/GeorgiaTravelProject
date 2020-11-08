import React from 'react';
import { connect } from 'react-redux';
import ContactShell from './Contact.shell';
import { fetchContactInformation } from '../../Redux/Reducers/ContactReducer';
import { useOnMount } from '../../Utils/Hooks';
import { ContactInformation } from '../../Models/ContactModels';
import { RestFunc, RestMethod } from '../../Engine/ResourceEngine';

interface ContactProps {
	contactInformation: any;
	fetchInfo(): void;
}

export interface ContactShellProps {
	contactInformation: ContactInformation;
}

const Contact = (props: ContactProps) => {
	const { contactInformation, fetchInfo } = props;

	useOnMount(() => {
		fetchInfo();

		console.log('fetched');
	});

	return <ContactShell contactInformation={contactInformation} />;
};

const mapStateToProps = (state: any) => {
	let { contactInformation } = state.ContactReducer;

	return { contactInformation };
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		fetchInfo: (msg = 'ACTION') => {
			dispatch(fetchContactInformation());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
