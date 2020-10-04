import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from '../Redux/Store';
import Navigation from './Navigation/Navigation.shell';
import LoginForm from './LoginForm/LoginForm.shell';

function App() {
	return (
		<Provider store={Store}>
			<Router>
				<Navigation />
				<MainRouter />
			</Router>
		</Provider>
	);
}

export default App;

function MainRouter() {
	return (
		<Switch>
			<Route path='/About'>About</Route>
			<Route path='/Tours'>Tours</Route>
			<Route path='/Contact'>Contact</Route>
			<Route path='/LogIn'>
				<LoginForm />
			</Route>
			<Route path='/register'>
				{/* <RegisterForm /> */}
				REGISTER COMMING SOON
			</Route>
			<Route path='/'>Home</Route>
		</Switch>
	);
}
