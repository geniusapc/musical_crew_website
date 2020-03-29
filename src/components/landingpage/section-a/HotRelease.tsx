import React, { useState } from "react";
import HotReleaseList from "./HotReleaseList";

// interface Props {}

// interface DataTypes {
// 	id: number;
// 	title: string;
// 	duration: string;
// 	watched?: boolean;
// }

// type State = DataTypes[];

const HotRelease: React.FC = () => {
	const [newMusic, setNewMusic] = useState([
		{ id: 1, title: "new song for the soul", duration: "4:52" },
		{ id: 2, title: "new song for the soul", duration: "4:52" },
		{ id: 3, title: "new song for the soul", duration: "4:52" },
		{ id: 4, title: "new song for the soul", duration: "4:52" },
		{ id: 5, title: "new song for the soul", duration: "4:52" },
		{ id: 6, title: "new song for the soul", duration: "4:52" },
		{ id: 7, title: "new song for the soul", duration: "4:52" },
		{ id: 8, title: "new song for the soul", duration: "4:52" }
	]);

	return (
		<div className="wrapper">
			{newMusic.map(music => (
				<div key={music.id}>
					<HotReleaseList
						title={music.title}
						serialno={music.id}
						duration={music.duration}
					/>
				</div>
			))}
		</div>
	);
};

export default HotRelease;
