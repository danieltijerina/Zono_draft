import React, { Component } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';

class AppNavbar extends Component {
	state = {
		isOpen: false
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return(
			<div>
				<Navbar color="dark" dark expand="sm" className="mb-5">
						<NavbarBrand><Link to="/home/us">Zono</Link></NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink><Link to="/home/login">Login</Link></NavLink>
								</NavItem>
								<NavItem>
									<NavLink><Link to="/home/signup">Signup</Link></NavLink>
								</NavItem>
							</Nav>
						</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default AppNavbar;