import React from "react";
import imageBg from '../../images/maninblack.jpg'
import imageBg2 from '../../images/man.jpg'
import ArrowRight from '@material-ui/icons/ArrowRight';
// import '../../sass/main';

interface Props {

}

const ContentPage: React.FC<Props> = () => {

	return (
		<div className="content" >
			<div>
				<h1>
					Peace of Mind <br />From the Power of Music
				</h1>
				<p>
					This is a place where you listen to your most favorite cool music
					<br />
					that touches and uplift the soul, we'll give you our word <em>body & soul</em>
				</p>
				<a href="#about" className="btn">
					LEARN MORE <ArrowRight />
				</a>
			</div>
			<div className="content-image">
				<img src={imageBg} alt="Landing " />
				<img src={imageBg2}  alt="Landing " />
			</div>
		</div>
	);
};

export default ContentPage;
