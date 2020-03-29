import React from "react";

interface Props {
	title: string;
	serialno: number;
	duration: string;
	link?: string;
}


const HotReleaseList: React.FC <Props>= ({serialno,title,duration}) => {
	return (
		<div className="music-list">
			<span>{serialno}</span>
			<span>{title}</span>
			<span>{duration}</span>
		</div>
	);
};

export default HotReleaseList;
