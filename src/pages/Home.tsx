import React from "react";
import ContentPage from '../components/landingpage/ContentPage';
import SectionA from '../components/landingpage/section-a/SectionA';
import Subscribe from '../components/Subscribe';

interface Props {}

const Home: React.FC<Props> = () => {
	return (
		<div>
			<ContentPage/>
			<SectionA/>
			<Subscribe/>
		</div>
	);
};

export default Home;
