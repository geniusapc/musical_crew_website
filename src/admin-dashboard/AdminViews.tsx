import React from "react";
import MusicList from "./charts/MusicList";

interface Props {}

const AdminViews: React.FC<Props> = () => {
	return (
		<div className="admin-home">
			<div>
				<MusicList />
			</div>
			<div>
				<MusicList />
			</div>
			<div>
				<MusicList />
			</div>
			<div>
				<MusicList />
			</div>
			<div>
				<MusicList />
			</div>
		</div>
	);
};

export default AdminViews;
