import React from "react";
import Home from "../pages/Home";
import Header from "../components/Header/Header";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Galleries from "../pages/GalleryGridList";
import Footer from "../components/Footer";
import ViewEvents from "../pages/ViewEvent";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import AdminDashboard from "../admin-dashboard/AdminPage";
import AdminGallery from '../admin-dashboard/admin-actions/Gallery';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

interface RouteProps {
	close?: any;
}
const Layouts: React.FC<RouteProps> = () => {
	return (
		<div className="layout">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/our-galleries" component={Galleries} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/create-account" component={Register} />
					<Route exact path="/events/:id" component={ViewEvents} />
					<Route exact path="/contact-us" component={ContactPage} />
					<Route exact path="/page-not-found" component={ErrorPage} />
					<Route exact path="/admin" component={AdminDashboard} />
					<Route exact path="/admin/galleries" component={AdminGallery} />
					<Redirect to="/page-not-found" />
				</Switch>
				<Footer />
			</Router>
		</div>

	);
};

export default Layouts;
