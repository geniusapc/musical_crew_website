import React from 'react'
import images from '../../../images/reading.png'
import { useSelector, TypedUseSelectorHook } from "react-redux";

interface Props {

}

interface RootState {
	Music: Array<{
		id: number;
		title: string;
		duration: string;
	}>;
}


const ViewEvent : React.FC<Props> = () => {
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
	let newMusicList = useTypedSelector(state => state.Music);
        return (
            <>
                <div className="view-event">
                    <div className="view-event-content">
                        <h2>Current News</h2>
                        <p>time and date</p>
                        <hr/>
                        <img src={images} alt="News image"/>
                        <p className="event-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A qui nesciunt rem aperiam molestias molestiae! Aliquam ipsa doloribus laborum earum error cumque voluptate quas, asperiores praesentium, distinctio, minima odit quis? Quaerat consequuntur minus cumque reiciendis aliquam vero optio libero facilis ea veritatis saepe, harum dolore itaque illo dolor explicabo perferendis!</p>
                        <div className="view-event-socials">
                            <span>facebook</span>
                            <span>facebook</span>
                            <span>facebook</span>
                        </div>
                    </div>
                    <div className="view-event-all">
                        <div>
                        <h4>Read Our Latest News</h4>
                        </div>
                        
                        <div className="event-box">
                            <img src={images} alt="news"/>
                            <div>
                                <h3>Alll News</h3>
                            <p>Time and date</p>
                            </div>
                        </div>
                        <div className="event-box">
                            <img src={images} alt="news"/>
                            <div>
                                <h3>Alll News</h3>
                            <p>Time and date</p>
                            </div>
                        </div>
                        <div className="event-box">
                            <img src={images} alt="news"/>
                            <div>
                                <h3>Alll News</h3>
                            <p>Time and date</p>
                            </div>
                        </div>
                        <div className="event-box">
                            <img src={images} alt="news"/>
                            <div>
                                <h3>Alll News</h3>
                            <p>Time and date</p>
                            </div>
                        </div>
                        <div className="event-box">
                            <img src={images} alt="news"/>
                            <div>
                                <h3>Alll News</h3>
                            <p>Time and date</p>
                            </div>
                        </div>
                        <div className="event-box">
                            <img src={images} alt="news"/>
                            <div>
                                <h3>Alll News</h3>
                            <p>Time and date</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
}


export default ViewEvent;