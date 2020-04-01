import React from "react";
import ContentPage from "../components/landingpage/ContentPage";
import SectionA from "../components/landingpage/section-a/SectionA";
import SectionB from "../components/landingpage/section-b/SectionB";
import Subscribe from "../components/Subscribe";

interface Props {}

const Home: React.FC<Props> = () => {
	return (
		<div>
			<ContentPage />
			<SectionA />
			<SectionB />
			<Subscribe />
		</div>
	);
};

export default Home;
