import React from "react";
import { useDispatch } from "react-redux";
// import musicListActions from "../../../redux-store/actions/LatestMusic";
import { GetSpecificID } from "../../../redux-store/actions/LatestMusic";

interface Props {
	title: string;
	serialno: number;
	arthur: string;
	link?: string;
	// onClick?:
	// 	| ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
	// 	| undefined;
};

const HotReleaseList: React.FC<Props> = ({ serialno, title, arthur, link }) => {
	const dispatch = useDispatch();
	return (
		<a href={link} target="_blanck">
			<div className="music-list" onClick={() => (dispatch(GetSpecificID(serialno)))}>
				<span>{serialno}</span>
				<span>{title}</span>
				<span>{arthur}</span>
			</div>
		</a>
	);
};

export default HotReleaseList;

// 
