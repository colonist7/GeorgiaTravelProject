import React, { useEffect } from 'react';
import { RestMethod } from '../../Engine/ResourceEngine';
import { useOnMount } from '../../Utils/Hooks';
import { ContactShellProps } from './Contact';
import { ContactBase } from './Contact.style';

const ContactShell = ({ contactInformation }: ContactShellProps) => {
	return (
		<ContactBase>
			<div>City: {contactInformation.city}</div>
			<div>Address: {contactInformation.address}</div>
			<div>Phone: {contactInformation.phone}</div>
			<div>E-mail: {contactInformation.email}</div>
		</ContactBase>
	);
};

export default ContactShell;
