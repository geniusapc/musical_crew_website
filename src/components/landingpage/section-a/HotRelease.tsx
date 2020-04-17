import React from "react";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import HotReleaseList from "./HotReleaseList";


interface RootState {
	MusicListReducer: Array<{
		id: number;
		title: string;
		arthur: string;
		link:string;
	}>;
}

const HotRelease: React.FC = () => {
	const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
	let newMusicList = useTypedSelector(state => state.MusicListReducer);

	return (
		<div className="wrapper">
			{newMusicList.map(music => (
				<div key={music.id}>
					<HotReleaseList
						title={music.title}
						serialno={music.id}
						arthur={music.arthur}
						link={music.link}
					/>
				</div>
			))}
		</div>
	);
};

export default HotRelease;
