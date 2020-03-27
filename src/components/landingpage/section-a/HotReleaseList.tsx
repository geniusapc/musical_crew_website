import React from "react";

interface Props {
	musicTitle: string;
	serialNumber: string;
	duration: number;
	link?: string;
}

const HotReleaseList: React.FC<Props> = ({
	musicTitle,
	serialNumber,
	duration,
	link
}) => {
	return (
		<div>
			<ul>
				<li>
					<span>{serialNumber}</span>
					{musicTitle} <span>{duration}</span>
				</li>
			</ul>
		</div>
	);
};

export default HotReleaseList;
