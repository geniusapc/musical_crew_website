import React from "react";

interface Props {
    target:boolean;
    targetDiv:any;
}

const About: React.FC<Props> = ({target,targetDiv}) => {
	return (
		<div className="about-wrapper" id="about" >
			<div className="about-text">
				<div className={ target ? "about-text-title":""} ref={targetDiv}  >
					<span>A</span>
					<span>B</span>
					<span>O</span>
					<span>U</span>
					<span>T</span>
					<span>U</span>
					<span>S</span>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
					minima nam repellat beatae provident, blanditiis vero deserunt
					exercitationem quisquam eum corporis voluptatibus ex enim rerum nulla
					doloribus cum debitis maxime?corporis voluptatibus ex enim rerum nulla
					doloribus cum debitis maxime?
				</p>
			</div>
			<div className="about-emphasis">
                <div className="about-emphasis-text">
                    <h4>MUSIC</h4>
                    <h4>MUSIC</h4>
                </div>
                <span>This is our passion.......</span>
            </div>
		</div>
	);
};

export default About;
