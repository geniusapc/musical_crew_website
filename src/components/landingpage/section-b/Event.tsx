import React, { useState } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import EventList from "./EventList";

interface Props { }
interface RootState {
	EventState: Array<{
		id: number;
		title: string;
		img: string;
		text: string;
	}>;
}

const Event: React.FC<Props> = () => {
	// let useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
	// const events = useTypedSelector(state => state.EventState);
	// console.log(events);
	
	const [events] = useState([
		{
			id: 1,
			title: "NewUpdate",
			img: "https://source.unsplash.com/random",
			text: `lorem30cdscbjhdscjhsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcjshbdcbjsdbsdbjjhvjdschvjvsdcjsvdjchvjdshv`
	},
	{
			id: 2,
			title: "Music concert",
			img: "https://source.unsplash.com/random",
			text: `lorem30cdscbjhdscjhsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcjshbdcbjsdbsdbjjhvjdschvjvsdcjsvdjchvjdshv`
	},
	{
			id: 3,
			title: "vacation with teams",
			img: "https://source.unsplash.com/random",
			text: `lorem30cdscbjhdscjhsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcjshbdcbjsdbsdbjjhvjdschvjvsdcjsvdjchvjdshv`
	}
	]);
	return (
		<>
			<h4 className="event-header">
				OUR <span>MUSIC</span> EVENT
			</h4>
			<div className="cardGrid">
				{events.map(event => (
					<div key={event.id}>
						<EventList title={event.title} text={event.text} img={event.img} />
					</div>
				))}
			</div>
		</>
	);
};

export default Event;
