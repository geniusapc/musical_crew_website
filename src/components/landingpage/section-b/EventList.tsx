import React from "react";
import { Link } from 'react-router-dom'

interface props {
	title: string;
	text: string;
	img: string;
	id?: number;
}

const EventList: React.FC<props> = ({ title, img, text }) => {
	return (
		<Link to={`/events/${title}`}>
			<div className="eventCard">
				<div className="eventCard-body">
					<img alt="Contemplative Reptile" src={img} />
					<h3>{title}</h3>
					<p>{text.slice(0,100)}</p>
					<div>
						<span>
							Read More
					</span>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default EventList;
