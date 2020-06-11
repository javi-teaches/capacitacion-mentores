import React from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/css/app.css';

import { Switch, Route } from 'react-router-dom';

// Components
import NavBar from './NavBar';

import About from './About';
import Home from './Home';
import Contact from './Contact';
import Perfiles from './Perfiles';
import NotFound from './NotFound';

function App() {
	return (
		<React.Fragment>
			<NavBar />
			
			{/* <Route path='/URL' render={(props) => <MiComponente prop={1} prop2={'asdasda'} {...props} /> } /> */}
			
			<div className="container text-center">
				<img src={logo} className="img-thumbnail my-3" alt="logo" width="20%" />
				<h2>React Router</h2>
			
				{/* Renderizamos los componentes */}
				<Switch>
					<Route exact path='/' component={ Home } />
					<Route path='/perfiles' component={ Perfiles } />
					<Route path='/about' component={ About } />
					<Route path='/contact' component={ Contact } />
					<Route component={ NotFound } />
				</Switch>
			</div>
		</React.Fragment>
	);
}

export default App;
