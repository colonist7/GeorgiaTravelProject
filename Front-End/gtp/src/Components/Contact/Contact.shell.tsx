import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { ContactShellProps } from './Contact';
import { ContactBase } from './Contact.style';

const ContactShell = ({ contactInformation }: ContactShellProps) => {
	return (
		<ContactBase>
			<Container style={{ padding: 20 }}>
				<Grid container spacing={5}>
					<Grid item xs={12}>
						<h1>Contact</h1>
					</Grid>
					<Grid item md={6} className='map'>
						<img src='https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1' />
					</Grid>
					<Grid item md={6}>
						<div className='contact-row'>
							<h3>City </h3>
							<p>{contactInformation.city}</p>
						</div>
						<div className='contact-row'>
							<h3>Address</h3>
							<p> {contactInformation.address}</p>
						</div>
						<div className='contact-row'>
							<h3>Phone</h3>
							<p> {contactInformation.phone}</p>
						</div>
						<div className='contact-row'>
							<h3>E-mail </h3>
							<p>{contactInformation.email}</p>
						</div>
					</Grid>
				</Grid>
			</Container>
		</ContactBase>
	);
};

export default ContactShell;
