import React from "react";
import ladyMusic from "../images/maninblack.jpg";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Lock from "@material-ui/icons/Lock";
import {Link} from 'react-router-dom';

interface Props {}

const Register: React.FC<Props> = () => {
	return (
		<div className="form">
			<div className="form-image">
				<img src={ladyMusic} alt="music girl" />
			</div>
			<form className="form-field">
				<h3>CREATE AN ACCOUNT</h3>
				<div>
					<span className="icon">
						<AccountCircle />
					</span>
					<input type="text" placeholder="email" required />
				</div>
				<div>
					<span className="icon">
						<Lock />
					</span>
					<input type="text" placeholder="password" required/>
				</div>
				<div>
					<span className="icon">
						<Lock />
					</span>
					<input type="text" placeholder="confirm password" required/>
				</div>
				<div>
					<input type="submit" className="btn" value="SIGNUP" />
				</div>
				<div>
					<span>
						Forgot password <a href="www.cdsjvsd.com">Click Here</a>
					</span> <br/>
					<span>
						Have an account ?<Link to="/login">Login Here</Link>
					</span>
				</div>
			</form>
		</div>
	);
};

export default Register;
