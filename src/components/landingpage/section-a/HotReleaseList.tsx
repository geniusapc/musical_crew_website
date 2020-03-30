import React from "react";
import { useDispatch } from "react-redux";
// import musicListActions from "../../../redux-store/actions/LatestMusic";
import {GetSpecificID} from "../../../redux-store/actions/LatestMusic";

interface Props {
	title: string;
	serialno: number;
	duration: string;
	link?: string;
	// onClick?:
	// 	| ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
	// 	| undefined;
};

const HotReleaseList: React.FC<Props> = ({ serialno, title, duration }) => {
	const dispatch = useDispatch();
	return (
		<div className="music-list" onClick={()=>(dispatch(GetSpecificID(serialno)))}>
			<span>{serialno}</span>
			<span>{title}</span>
			<span>{duration}</span>
		</div>
	);
};

export default HotReleaseList;

// 
