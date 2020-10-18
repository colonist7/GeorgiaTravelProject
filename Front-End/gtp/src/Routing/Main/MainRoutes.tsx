import React from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm.shell';
import RegisterForm from '../../Components/RegisterForm/RegisterForm.shell';
import Contact from '../../Components/Contact/Contact';

const MainRoutes = {
	Tours: {
		path: '/Tours',
		main: 'Tours',
		isPrivate: false,
	},
	Contact: {
		path: '/Contact',
		main: <Contact />,
		isPrivate: false,
	},
	About: {
		path: '/About',
		main: 'About',
		isPrivate: false,
	},
	Login: {
		path: '/Login',
		main: <LoginForm />,
		isPrivate: false,
	},
	Register: {
		path: '/Register',
		main: <RegisterForm />,
		isPrivate: false,
	},
	Home: {
		path: '/',
		main: 'Home',
		isPrivate: false,
	},
};

const useMainRoutes: any = () => {
	let pathArray: any = {};
	Object.keys(MainRoutes).map((route) => {
		//@ts-ignore
		pathArray[route] = MainRoutes[route].path;
	});

	return pathArray;
};

export { useMainRoutes, MainRoutes };
