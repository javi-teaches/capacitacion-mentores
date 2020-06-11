import React from 'react';
import { Redirect } from 'react-router-dom';

const users = [
	{ id: 1, name: 'Jane Doe'},
	{ id: 2, name: 'Jhon Smith'},
	{ id: 3, name: 'Peter Grifin'},
];

const Perfil = ({ match }) => {
	console.log(`Me pidieron el id: ${match.params.id}`);
	let choosen = users.find(user => user.id === Number(match.params.id));
	console.log(choosen);

	if ( choosen ) {
		return (
			<React.Fragment>
				<h2>Soy el component Perfil</h2>
				<p> Ingresaste al componente perfil de: <b> { choosen.name } </b>	</p>
			</React.Fragment>
		)
	} else {
		return <Redirect to="/about" />
		// return <h2>No se encontró</h2>;
	}
}

export default Perfil;