import React from "react";
import HotRelease from "./HotRelease";
import spotify from "../../../images/spotify.png";
import apple from "../../../images/apple.png";
import google from "../../../images/google.png";

interface Props {
	frameborder?: string;
	
}

const SectionA: React.FC<Props> = () => {
	return (
		<div className="sectionA" id="sectionA">
			<div className="sectionA-video">
				<iframe
				title="introduction"
					width="560"
					height="315"
					src="https://www.youtube.com/embed/ae2iX6vZCoM"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
			</div>
			<div className="sectionA-list">
				<h3>
					Latest <span>Release</span>
				</h3>
				<p>Best the first to hear our newest release</p>
				<HotRelease />
				<div>
					<img src={spotify} alt="spotify" />
					<img src={google} alt="google" />
					<img src={apple} alt="apple" />
				</div>
			</div>
		</div>
	);
};

export default SectionA;
