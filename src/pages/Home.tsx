import React, { useRef, useState, useEffect } from "react";
import ContentPage from "../components/landingpage/ContentPage";
import SectionA from "../components/landingpage/section-a/SectionA";
import SectionB from "../components/landingpage/section-b/SectionB";
import About from "../components/landingpage/section-a/About";
import Subscribe from "../components/Subscribe";

interface Props {

}

const Home: React.FC<Props> = () => {
	const [target, setTarget] = useState<boolean>(false);
	const refContainer = useRef<any>();
	const refTarget = useRef<any>();
	const callbackFn = (entries: IntersectionObserverEntry[]) =>
		entries[0].isIntersecting ? setTarget(true) : setTarget(false);

	useEffect(() => {
		const aboutAnimate = new IntersectionObserver(callbackFn);
		aboutAnimate.observe(refTarget.current);

		return () => {
			aboutAnimate.disconnect();
		};
	}, []);

	return (
		<div ref={refContainer} className="home">
			<ContentPage />
			<SectionA />
			<About targetDiv={refTarget} target={target} />
			<SectionB />
			<Subscribe />
		</div>
	);
};

export default Home;
