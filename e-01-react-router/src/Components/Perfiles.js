import React from 'react';

import { NavLink, Route, Switch } from 'react-router-dom';

import Perfil from './Perfil';

const Perfiles = () => {
	return (
		<React.Fragment>
			<h6>Soy el component Perfiles</h6>
			<h1>Elegí el perfil</h1>
			<div className="list-group">
				<NavLink className="list-group-item list-group-item-action" to="/perfiles/1"> Perfil 1 </NavLink>
				<NavLink className="list-group-item list-group-item-action" to="/perfiles/2"> Perfil 2 </NavLink>
				<NavLink className="list-group-item list-group-item-action" to="/perfiles/3"> Perfil 3 </NavLink>
				<NavLink className="list-group-item list-group-item-action" to="/perfiles/345"> Perfil Inexistente </NavLink>
			</div>
			
			<Switch>
				<Route path="/perfiles/:id" component={ Perfil } />
			</Switch>
		</React.Fragment>
	)
}

export default Perfiles;