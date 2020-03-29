import React from "react";
import footerImg from '../images/Soft_soundz.png'

const Footer: React.FC = () => {
	return <footer className="footer">
        <div className="footer-img">
            <img src={footerImg} alt="footer logo"/>
        </div>
        <div className="footer-list">
            <ul>
                <li><a href="www.fdhvf.com">Ssrvices</a></li>
                <li><a href="www.fdhvf.com">Ssrvices</a></li>
                <li><a href="www.fdhvf.com">Ssrvices</a></li>
                <li><a href="www.fdhvf.com">Ssrvices</a></li>
                <li><a href="www.fdhvf.com">Ssrvices</a></li>
            </ul>
        </div>
        <div className="footer-team">
            <blockquote>powered by cmcWebCode <i>FrontEnd</i></blockquote> & PrinceArthur <i>Backend</i> 
        </div>
        <cite>Soft Soundz Team &copy; 2020 || All Right reserved</cite>
    </footer>
};

export default Footer;
