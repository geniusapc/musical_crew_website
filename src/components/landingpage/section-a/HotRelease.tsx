import React from "react";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import HotReleaseList from "./HotReleaseList";


interface RootState {
	Music: Array<{
		id: number;
		title: string;
		duration: string;
	}>;
}

const HotRelease: React.FC = () => {
	const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
	let newMusicList = useTypedSelector(state => state.Music);
	// console.log(newMusicList = []);
	// newMusicList.push({id:1,title:"mike",duration:"dkjskj"})

	// newMusicList.push(
	// 	{ id: 1, title: "new song for the soul", duration: "4:52" },
	// 	{ id: 2, title: "new song for the soul", duration: "4:52" },
	// 	{ id: 3, title: "new song for the soul", duration: "4:52" },
	// 	{ id: 4, title: "new song for the soul", duration: "4:52" },
	// 	{ id: 5, title: "new song for the soul", duration: "4:52" },
	// 	{ id: 6, title: "new song for the soul", duration: "4:52" },
	// 	{ id: 7, title: "new song for the soul", duration: "4:52" },
	// 	{ id: 8, title: "new song for the soul", duration: "4:52" }
	// );
	// newMusicList =[
	// 	{ id: 1, title: "new song for the soul", duration: "4:52" },
	// 	{ id: 2, title: "new song for the soul", duration: "4:52" },
	// 	{ id: 3, title: "new song for the soul", duration: "4:52" },
	// 	{ id: 4, title: "new song for the soul", duration: "4:52" },
	// 	{ id: 5, title: "new song for the soul", duration: "4:52" },
	// 	{ id: 6, title: "new song for the soul", duration: "4:52" },
	// 	{ id: 7, title: "new song for the soul", duration: "4:52" },
	// 	{ id: 8, title: "new song for the soul", duration: "4:52" }
	// ];

	// newMusicList = data;

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
