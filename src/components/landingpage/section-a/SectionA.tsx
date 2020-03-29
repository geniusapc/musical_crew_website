import React from "react";
import HotRelease from "./HotRelease";

const SectionA: React.FC = () => {
	// const store = createStore(
	// 	reducer, /* preloadedState, */
	//  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	//   );
	return (
		<div className="sectionA">
			<div className="sectionA-list">
				<h3>
					Latest <span>Release</span>
				</h3>
				<p>Lorem ipsum dolor sit, amet consectetur magnam labore.</p>
				<div className="">
				<HotRelease />
				<p>svdhsvkjsdvsdv</p>
				<p>svdhsvkjsdvsdv</p>
				<p>svdhsvkjsdvsdv</p>
				<p>svdhsvkjsdvsdv</p>
				</div>
				
			</div>
	

			<div className="sectionA-video">
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia blanditiis, laborum veritatis hic error harum unde asperiores! Quas, asperiores at ipsam libero, rerum ad quibusdam est, sequi natus repudiandae placeat.</p>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia blanditiis, laborum veritatis hic error harum unde asperiores! Quas, asperiores at ipsam libero, rerum ad quibusdam est, sequi natus repudiandae placeat.</p>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia blanditiis, laborum veritatis hic error harum unde asperiores! Quas, asperiores at ipsam libero, rerum ad quibusdam est, sequi natus repudiandae placeat.</p>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia blanditiis, laborum veritatis hic error harum unde asperiores! Quas, asperiores at ipsam libero, rerum ad quibusdam est, sequi natus repudiandae placeat.</p>
			</div>
		</div>
	);
};

export default SectionA;
