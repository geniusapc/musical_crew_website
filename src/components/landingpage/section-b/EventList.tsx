import React from "react";

interface props {
	title: string;
	text: string;
	img: string;
}

const EventList: React.FC<props> = ({ title, img, text }) => {
	return (
		<div className="eventCard">
			<div className="eventCard-body">
				<img alt="Contemplative Reptile" src={img} />
				<h3>{title}</h3>

				<p>{text}</p>
				<div>
					<a className="btn" href="www.dscljd./cd">
						Read More
					</a>
				</div>
			</div>
		</div>
	);
};

export default EventList;
