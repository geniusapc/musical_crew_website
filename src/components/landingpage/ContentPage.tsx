import React from "react";
import imageBg from '../../images/maninblack.jpg'
import ArrowRight from '@material-ui/icons/ArrowRight';

interface Props {

}

const ContentPage: React.FC<Props> = () => {

	return (
		<div className="content" >
			<div>
				<h1>
					Peace of Mind to <br /> Communicate Freely
				</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
					<br />
					tenetur quia architecto incidunt nemo numquam ut eos quam eum
					distinctio.
				</p>

				<a href="#about" className="btn">
					LEARN MORE <ArrowRight />
				</a>
			</div>
			<div className="content-image">
				<img src={imageBg} alt="Landing " />
			</div>
		</div>
	);
};

export default ContentPage;
