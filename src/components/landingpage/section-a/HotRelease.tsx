import React, { useState } from "react";

interface Props {}

interface DataTypes {
	text?: string;
	complete?: boolean;
}

type State = DataTypes[];

const HotRelease: React.FC<Props> = () => {
	const [newMusic, setNewMusic] = useState<State | null>([
		{ text: "mike" ,complete: false},
		{ text: "mike" ,complete: false},
		{ text: "mike" ,complete: false},
		{ text: "mike" ,complete: false},
		{ text: "mike" ,complete: false},
		{ text: "mike" ,complete: false},
		{ text: "mike" ,complete: false},
		{ text: "mike" ,complete: false},
	]);
	console.log(newMusic);
	return <div></div>;
};

export default HotRelease;

// {id:1},
// 		{musicTitle:"new song"},
// 		{duration:"4:52"}
