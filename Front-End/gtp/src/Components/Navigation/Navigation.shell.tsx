import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationBase, Logo, FlexBetween } from './Navigation.style';
import { useMainRoutes } from '../../Routing/Main/MainRoutes';
import Container from '@material-ui/core/Container/Container';
import { Grid } from '@material-ui/core';

const Navigation = () => {
	const { Home, Tours, About, Contact, Login } = useMainRoutes();

	return (
		<NavigationBase>
			<Container>
				<Grid>
					<FlexBetween>
						<Logo src={'https://georgianfamily.de/img/Logo_w.png'} />
						<ul>
							<li>
								<Link to={Home}>Home</Link>
							</li>
							<li>
								<Link to={Tours}>Tours</Link>
							</li>
							<li>
								<Link to={About}>About</Link>
							</li>

							<li>
								<Link to={Contact}>Contact</Link>
							</li>
							<li>
								<Link to={Login}>Log In</Link>
							</li>
						</ul>
					</FlexBetween>
				</Grid>
			</Container>
		</NavigationBase>
	);
};

export default Navigation;
