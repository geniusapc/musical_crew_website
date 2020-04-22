import React, { useEffect } from "react";
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { ToogleTheme } from '../redux-store/actions/Toogle';
import ladyMusic from "../images/maninblack.jpg";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Lock from "@material-ui/icons/Lock";
import { Link } from 'react-router-dom';

interface Props { }
interface State {
	ThemeSwitch: boolean;
}

const Login: React.FC<Props> = () => {
	const useTypeSelector: TypedUseSelectorHook<State> = useSelector;
	const themeState = useTypeSelector(state => state.ThemeSwitch);
	const dispatch = useDispatch();
	useEffect(() => {
		return () => {
			dispatch(ToogleTheme());
		}
	}, []);
	return (
		<div className="form">
			<div className="form-image">
				<img src={ladyMusic} alt="music girl" />
			</div>
			<form className="form-field">
				<h3>LOGIN INTO YOUR ACCOUNT</h3>
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
					<input type="submit" value="LOGIN" className="btn" />
				</div>
				<div>
					<span>
						Forgot password <a href="www.cdsjvsd.com">Get a new password</a>
					</span><br />
					<span>
						Don't Have an account? <Link to="/create-account">Signup an account here</Link>
					</span>
				</div>
			</form>
		</div>
	);
};

export default Login;
