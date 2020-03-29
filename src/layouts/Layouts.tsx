import React from "react";
import Home from "../pages/Home";
import Header from "../components/Header/Header";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Footer from '../components/Footer';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

interface RouteProps {
	// location?: H.Location;
	// component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
	// render?: ((props: RouteComponentProps<any>) => React.ReactNode);
	// children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode;
	path?: string | string[];
	exact?: boolean;
	sensitive?: boolean;
	strict?: boolean;
	Component?: React.FC<any> | null;
}

const Layouts: React.FC<RouteProps> = () => {
	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/create-account" component={Register} />
				</Switch>
				<Footer/>
			</div>
		</Router>
	);
};

export default Layouts;
