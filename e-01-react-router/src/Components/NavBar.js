import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<NavLink className="navbar-brand" exact to="/">React Router</NavLink>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item"><NavLink exact to="/" className="nav-link" activeClassName="actual"> Home </NavLink></li>
					<li className="nav-item"><NavLink to="/about" className="nav-link" activeClassName="actual"> About </NavLink></li>
					<li className="nav-item"><NavLink to="/contact" className="nav-link" activeClassName="actual"> Contact </NavLink></li>
					<li className="nav-item"><NavLink to="/perfiles" className="nav-link" activeClassName="actual"> Perfiles </NavLink></li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar;