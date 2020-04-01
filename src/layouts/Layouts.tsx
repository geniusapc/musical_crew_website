import React from "react";
import Home from "../pages/Home";
import Header from "../components/Header/Header";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Galleries from '../pages/GalleryGridList';
import Footer from "../components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { CollapseSideBar, ToogleSideBar } from "../redux-store/actions/Toogle";

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

interface RootState {
	Toggle: Boolean;
}

const Layouts: React.FC<RouteProps> = () => {
	const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
	let Toggle = useTypedSelector(state => state.Toggle);
	const dispatch = useDispatch();
	// const toggleNavBar = () =>
	// 	(Toggle = false ? dispatch(CollapseSideBar()) : true);
	const toggleNavBar = () =>{
		//  (dispatch(CollapseSideBar()));
		if (Toggle = false) {
			dispatch(ToogleSideBar())
			// Toggle =false;
			// console.log(Toggle);
			
		} else {
			return;;
		}
	}
	return (
		<Router>
			<div onClick={toggleNavBar}>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/our-galleries" component={Galleries} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/create-account" component={Register} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
};

export default Layouts;
