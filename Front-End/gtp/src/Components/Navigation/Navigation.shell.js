import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { NavigationBase, Logo, FlexBetween } from './Navigation.style';
import { useMainRoutes } from '../../Routing/Main/MainRoutes';

const Navigation = () => {
	const { Home, Tours, About, Contact, Login } = useMainRoutes();

	return (
		<NavigationBase>
			<Container>
				<Row>
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
				</Row>
			</Container>
		</NavigationBase>
	);
};

export default Navigation;
