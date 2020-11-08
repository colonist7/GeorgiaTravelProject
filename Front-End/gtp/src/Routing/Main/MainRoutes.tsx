import React from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm';
import RegisterForm from '../../Components/RegisterForm/RegisterForm';
import Contact from '../../Components/Contact/Contact';

const MainRoutes = {
	Tours: {
		path: '/Tours',
		//@ts-ignore
		main: 'Tours',
		isPrivate: false,
	},
	Contact: {
		path: '/Contact',
		//@ts-ignore
		main: <Contact />,
		isPrivate: false,
	},
	About: {
		path: '/About',
		//@ts-ignore
		main: 'About',
		isPrivate: false,
	},
	Login: {
		path: '/Login',
		//@ts-ignore
		main: <LoginForm />,
		isPrivate: false,
	},
	Register: {
		path: '/Register',
		//@ts-ignore
		main: <RegisterForm />,
		isPrivate: false,
	},
	Home: {
		path: '/',
		//@ts-ignore
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
