import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { NavigationBase, Logo, FlexCenter, FlexBetween } from './Navigation.style';

const Navigation = () => {
	return (
		<NavigationBase>
			<Container>
				<Row>
					<FlexBetween>
						<Logo src={'https://georgianfamily.de/img/Logo_w.png'} />
						<ul>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/Tours'>Tours</Link>
							</li>
							<li>
								<Link to='/About'>About</Link>
							</li>

							<li>
								<Link to='/Contact'>Contact</Link>
							</li>
							<li>
								<Link to='/LogIn'>Log In</Link>
							</li>
						</ul>
					</FlexBetween>
				</Row>
			</Container>
		</NavigationBase>
	);
};

export default Navigation;
