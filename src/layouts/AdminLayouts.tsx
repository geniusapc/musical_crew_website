import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import AdminDashboard from "../admin-dashboard/AdminPage";

interface Props {
	close?: boolean;
	setUserInterface: () => void;
}


const AdminLayouts: React.FC<Props> = ({ close, setUserInterface }) => {
	useEffect(() => {
        if (!close) {
            setUserInterface();
        }
		
	}, []);

	return (
		<div
			style={{
				display: close ? "none" : "block",
			}}>
			{/* <Route exact path="/admin" component={AdminDashboard} /> */}
		</div>
	);
};

export default AdminLayouts;
