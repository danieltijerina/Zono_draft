import React, { Component } from 'react';
import {
	Row,
	Col,
	Container
} from 'reactstrap';

const contStyle = {
	textAlign: 'center'};

const introStyle = {
	minHeight: '400px',
	backgroundColor: '#f5f7fa'
};

const h1Style = {
	textAlign: 'center'
};

class ZonoIntro extends Component {
	render () {
		return(
		<div>
			<h1 style={h1Style}>Bienvenido a Zono</h1>
			<Row style={introStyle}>
				<Col md="6" style={contStyle}>
					<Container>
						<h3>Fácil</h3>
					</Container>
				</Col>
				<Col md="6" style={contStyle}>
					<Container>
						<h3>Seguro</h3>
					</Container>
				</Col>
			</Row>
		</div>
		);
	}
}

export default ZonoIntro;