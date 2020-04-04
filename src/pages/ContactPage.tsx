import React from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Person from '@material-ui/icons/Person';
import Phone from '@material-ui/icons/Phone';
import bodyImage from '../images/maninblack.jpg';

interface Props {
   cols?:string;
}

const ContactPage: React.FC<Props> = ({cols}) => {
	return (
		<div className="contact-page">
			<div className="form">
            <div className="form-image">
				<img src={bodyImage} alt="music girl" />
			</div>
				<form className="form-field">
					<h3> HAVE A MESSAGE FOR US ?</h3>
					<div>
						<span className="icon">
							<Person />
						</span>
						<input type="text" placeholder="Name" required />
					</div>
					<div>
						<span className="icon">
							<AccountCircle />
						</span>
						<input type="text" placeholder="Email" required />
					</div>
					<div>
						<span className="icon">
							<Phone />
						</span>
						<input type="text" placeholder="Phone Number" required />
					</div>
					<div>
						<textarea name="message"   placeholder="Your Message Here...." ></textarea>
					</div>
					<div>
						<input type="submit" value="LOGIN" className="btn" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactPage;
