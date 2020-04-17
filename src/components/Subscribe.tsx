import React from "react";

interface Props {}

const Subscribe: React.FC<Props> = () => {
	return (
		<div className="subscribe" id="subscribe">
            <h5><span> WANT TO RECEIVE</span> OUR UPDATES</h5>
			<div className="subscribe-search">
				<input type="text" placeholder="Enter your email" />
				<span>SUBSCRIBE</span>{" "}
			</div>
		</div>
	);
};

export default Subscribe;
