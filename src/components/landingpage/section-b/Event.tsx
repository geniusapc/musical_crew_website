import React, { useState } from "react";
import EventList from "./EventList";

interface Props {}

const Event: React.FC<Props> = () => {
	const [event] = useState([
		{	id:1,
			title: "New Update",
			img: "https://source.unsplash.com/random",
			text: `lorem30cdscbjhdscjhsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcjshbdcbjsdbsdbjjhvjdschvjvsdcjsvdjchvjdshv`
		},
		{id:2,
			title: "New Update",
			img: "https://source.unsplash.com/random",
			text: `lorem30cdscbjhdscjhsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcsbdjhcbjshdcbjshdbcjhsdbjhcbsjhdbcjshbdcbjsdbsdbjjhvjdschvjvsdcjsvdjchvjdshv`
		},
		{id:3,
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
				<div key={env.id}>
<EventList title={env.title} text={env.text} img={env.img} />
				</div>
				
			))}
		</div>
        </>
	);
};

export default Event;
