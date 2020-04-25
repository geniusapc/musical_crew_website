import React from "react";
import ladyMusic from "../images/maninblack.jpg";
import ladyMusic2 from "../images/login2.svg";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Lock from "@material-ui/icons/Lock";
import { Link } from 'react-router-dom';

interface Props { }

const Register: React.FC<Props> = () => {
	return (
		<div className="form">
			<div className="form-image">
				<img src={ladyMusic} alt="music girl" />
				<img src={ladyMusic2} alt="music girl" />
			</div>
			<form className="form-field">
				<h3>CREATE AN ACCOUNT</h3>
				<div>
					<span className="icon">
						<AccountCircle />
					</span>
					<label htmlFor="email">
						<input type="text" placeholder="email" required />
					</label>
				</div>
				<div>
					<span className="icon">
						<Lock />
					</span>
					<label htmlFor="password">
						<input type="text" placeholder="password" required />
					</label>
				</div>
				<div>
					<span className="icon">
						<Lock />
					</span>
					<label htmlFor="confirmPassword">
					<input type="text" placeholder="confirm password" required />
					</label>
				</div>
				<div>
					<input type="submit" className="btn" value="SIGNUP" />
				</div>
				<div>
					<span>
						Have an account ?<Link to="/login">Login your account here</Link>
					</span>
				</div>
			</form>
		</div>
	);
};

export default Register;
