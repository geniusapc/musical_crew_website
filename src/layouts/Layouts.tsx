import React from "react";
import Home from "../pages/Home";
import Header from '../components/Header/Header';


const Layouts: React.FC = () => {
	return (
		<div>
            <Header/>
			<Home />
		</div>
	);
};

export default Layouts;
