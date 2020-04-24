import React, { lazy, Suspense } from "react";
import Home from "../pages/Home";
// import ThemeMode from '../themeChanger';
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import ErrorPage from "../pages/ErrorPage";
import Loader from './Loader';
import '../sass/main.scss';
import {
	BrowserRouter as Router,
	Route
}
	from "react-router-dom";
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Galleries = lazy(() => import("../pages/GalleryGridList"));
const ViewEvents = lazy(() => import("../pages/ViewEvent"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const AdminDashboard = lazy(() => import("../admin-dashboard/AdminPage"));
const AdminGallery = lazy(() => import('../admin-dashboard/admin-actions/Gallery'));
interface RouteProps {
	close?: any;
}
const Layouts: React.FC<RouteProps> = () => {

	return (
		<div className="layout">
			<Router>
				<Header />
				<Route exact path="/" component={Home} />
				<Suspense fallback={<Loader/>}>
					<Route exact path="/our-galleries" component={Galleries} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/create-account" component={Register} />
					<Route exact path="/events/:id" component={ViewEvents} />
					<Route exact path="/contact-us" component={ContactPage} />
					<Route exact path="/page-not-found" component={ErrorPage} />
					<Route exact path="/admin" component={AdminDashboard} />
					<Route exact path="/admin/galleries" component={AdminGallery} />
					{/* <Redirect to="/page-not-found" /> */}
				</Suspense>
				<Footer />
			</Router>
		</div>
	);
};

export default Layouts;
