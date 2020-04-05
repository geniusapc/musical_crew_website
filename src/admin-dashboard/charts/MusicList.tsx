import React from "react";

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";
const music =[
    {title:"mike",id:1,duration:2882},
    {title:"jose",id:2,duration:2222},
    {title:"thewe",id:3,duration:9202},
    {title:"tommy",id:4,duration:10101},
    {title:"uncle",id:5,duration:1910},  
]

const data = [
	{
		name: "Page A",
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Page B",
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "Page C",
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "Page D",
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "Page E",
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: "Page F",
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "Page G",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

interface Props {}


const MusicList: React.FC<Props> = () => {
	return (
		<div style={{boxShadow:"2px 2px 3px 4px rgba(0,0,0,0.05)"}}>
			<LineChart
				width={400}
				height={200}
				data={music}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="title" />
				<YAxis  />
				<Tooltip />
				<Legend />
				<Line
					type="monotone"
					dataKey={"duration"}
					stroke="#8884d8"
					activeDot={{ r: 8 }}
				/>
				<Line type="monotone" dataKey="id" stroke="#82ca9d" />
			</LineChart>
		</div>
	);
};

export default MusicList;
