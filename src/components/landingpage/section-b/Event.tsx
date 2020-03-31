import React, { useState } from "react";
import EventList from "./EventList";

interface Props {}

const Event: React.FC<Props> = () => {
	const [event] = useState([
		{
			title: "New Update",
			img: "https://source.unsplash.com/random",
			text: `lorem30cdscbjhdscjhsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcjshbdcbjsdbsdbjjhvjdschvjvsdcjsvdjchvjdshv`
		},
		{
			title: "New Update",
			img: "https://source.unsplash.com/random",
			text: `lorem30cdscbjhdscjhsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcjshbdcbjsdbsdbjjhvjdschvjvsdcjsvdjchvjdshv`
		},
		{
			title: "New Update",
			img: "https://source.unsplash.com/random",
			text: `lorem30cdscbjhdscjhsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcjshbdcbjsdbsdbjjhvjdschvjvsdcjsvdjchvjdshv`
		}
	]);
	return (
        <>
        <h4 className="event-header">OUR <span>MUSIC</span>  EVENT</h4>
		<div className="cardGrid">
			{event.map(env => (
				<EventList title={env.title} text={env.text} img={env.img} />
			))}
		</div>
        </>
	);
};

export default Event;
