import React from "react";
import {Link} from 'react-router-dom';
import errorImage from "../images/err.jpg";

interface Props {}

const ErrorPage: React.FC<Props> = () => {
	return (
		<div  className="error-page">
			<img src={errorImage} alt="error 4o4" />
            <Link className="btn" to="/">Go To Hompage</Link>
		</div>
	);
};

export default ErrorPage;
