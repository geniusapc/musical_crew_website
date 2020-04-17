import React from "react";
import MusicList from "./charts/MusicList";
import Events from "./charts/Events";
import Users from "./charts/Users";

interface Props { }

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
				<Events />
			</div>
			<div>
				<Users />
			</div>
			<div>
				<MusicList />
			</div>
		</div>
	);
};

export default AdminViews;
