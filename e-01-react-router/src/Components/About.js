import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import AboutHistory from './AboutHistory'
import AboutTeam from './AboutTeam'
import AboutJob from './AboutJob'

const About = () => {
	return(
		<React.Fragment>
			<h2>Soy el component About</h2>
			<NavLink className="btn btn-primary m-1" to="/about/history">History</NavLink>
			<NavLink className="btn btn-primary m-1" to="/about/team">Our Team</NavLink>
			<NavLink className="btn btn-primary m-1" to="/about/job">Our Job</NavLink>

			<Switch>
				<Route path="/about/history" component={ AboutHistory } />
				<Route path="/about/team" component={ AboutTeam } />
				<Route path="/about/job" component={ AboutJob } />
			</Switch>
		</React.Fragment>
	)
}

export default About;