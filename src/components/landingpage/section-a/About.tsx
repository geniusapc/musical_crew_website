import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import imageSlide1 from '../../../images/slide1.jpg';
import imageSlide2 from '../../../images/slide2.jpg';
import imageSlide3 from '../../../images/slide3.jpg';
import imageSlide4 from '../../../images/slide4.jpg';
import imageSlide5 from '../../../images/slide5.jpg';
import imageSlide6 from '../../../images/slide6.jpg';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

interface Props {
	target: boolean;
	targetDiv: any;
}

const About: React.FC<Props> = ({ target, targetDiv }) => {
	return (
		<div className="about-wrapper" id="about" >
			<div className="about-text">
				<div className={target ? "about-text-title" : ""} ref={targetDiv}  >
					<span>A</span>
					<span>B</span>
					<span>O</span>
					<span>U</span>
					<span>T</span>
					<span>U</span>
					<span>S</span>
				</div>
				<p>
					Our goal is to always bring to you cool and soft muisc for the body and soul that will always keep you going and also give you updates about the music industry.. <br/>
					<em>"No matter how corrupt, greedy, and heartless our government, our corporations, our media, and our religious and charitable institutions may become, the music will still be wonderful. "Kurt Vonnegut"
</em>
				</p>
			</div>
			<div className="about-emphasis">
				{/* <div className="about-emphasis-text">
					<h4>MUSIC</h4>
					<h4>MUSIC</h4>
				</div>
				<span>This is our passion.......</span> */}
				<CarouselProvider
					naturalSlideWidth={120}
					naturalSlideHeight={145}
					totalSlides={6}
				>
					<Slider>
						<Slide index={0}> <img className="image-slider" src={imageSlide1} height="300" width="500" alt="man in black" /> </Slide>
						<Slide index={1}><img className="image-slider" src={imageSlide2} height="300" width="500" alt="man in black" /></Slide>
						<Slide index={2}><img className="image-slider" src={imageSlide3} height="300" width="500" alt="man in black" /></Slide>
						<Slide index={3}> <img className="image-slider" src={imageSlide4} height="300" width="500" alt="man in black" /> </Slide>
						<Slide index={4}><img className="image-slider" src={imageSlide5} height="300" width="500" alt="man in black" /></Slide>
						<Slide index={5}><img className="image-slider" src={imageSlide6} height="300" width="500" alt="man in black" /></Slide>
					</Slider>
					<ButtonBack className="btn-move btn-slide1"><span> <i className="fas fa-arrow-left"></i></span></ButtonBack>
					<ButtonNext className=" btn-move btn-slide2"><span><i className="fas fa-arrow-right"></i></span></ButtonNext>
				</CarouselProvider>
			</div>
		</div>
		// <ArrowBackIosIcon color="primary" size="50" />
		// <ArrowForwardIosIcon color="primary" size="50" />
	);
};

export default About;
