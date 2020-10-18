import React from 'react';
import {MainRoutes} from './MainRoutes';
import { Switch, Route } from 'react-router-dom';


export const MainRouter = () => {
	return (
		<Switch>
			{Object.keys(MainRoutes).map((route, index) => {
                return <Route key={index} path={MainRoutes[route].path}>{MainRoutes[route].main}</Route>
            })}
		</Switch>
	);
}