import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from '../Redux/Store';
import Navigation from './Navigation/Navigation.shell';
import {MainRouter} from '../Routing/Main/MainRouter';

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

