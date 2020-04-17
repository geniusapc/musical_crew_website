import React from "react";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import LinkedIn from "@material-ui/icons/LinkedIn";


const Footer: React.FC = () => {
    const DATE = new Date();
    const getYear = DATE.getFullYear()
	return (
		<footer className="footer">
			<h6>GET IN TOUCH</h6>
			<div className="footer-list">
				<ul>
					<li>
						<a href="www.fdhvf.com">
							<Facebook />
						</a>
					</li>
					<li>
						<a href="www.fdhvf.com">
							<Twitter />
						</a>
					</li>
					<li>
						<a href="www.fdhvf.com">
							<LinkedIn />
						</a>
					</li>
				</ul>
			</div>
			<div className="footer-team">
				<blockquote>
					Developed by <a target="_blanck" href="https://twitter.com/cmcWebCode?s=07">@cmcWebCode</a>  <i>FrontEnd</i> &<a target="_blanck" href="https://github.com/youngenius1">@PrinceArthur</a>  <i>Backend</i>
				</blockquote>{" "}
				
			</div>
			<cite>Soft Soundz Team &copy; {getYear} || All Right reserved</cite>
		</footer>
	);
};

export default Footer;
