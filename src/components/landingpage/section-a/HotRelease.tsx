import React from "react";
import { useSelector,TypedUseSelectorHook } from "react-redux";
import HotReleaseList from "./HotReleaseList";

interface RootState {
	Music: Array<{
		id:number;
		title:string;
		duration:string;
	}>;
  }
  
  
const HotRelease: React.FC = () => {
	const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
	const newMusicList = useTypedSelector(state => state.Music);
	return (
		<div className="wrapper">
			{newMusicList.map(music => (
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
