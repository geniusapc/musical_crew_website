import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, TypedUseSelectorHook } from "react-redux";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

interface Props {
  match?: any;
  data?: any;
  id?: any;
  date: any;
}

interface RootState {
  EventState: Array<{
    id: number;
    title: string;
    img: string;
    text: string;
  }>;
}

const ViewEvent: React.FC<Props> = ({ match }) => {
  const [specificEvent, setSpecificEvent] = useState<any>('');
  let useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const events = useTypedSelector(state => state.EventState);

  const getSpecificEvent = (id: string, events: Array<{
    id: number;
    title: string;
    img: string;
    text: string;
  }>) => {
    events.filter(data => {
      if (data.title === id) {
        return setSpecificEvent(data);
      }
    })
  };
  useEffect(() => {
    getSpecificEvent(match.params.id, events);

  })
  return (
    <>
      <div className="view-event" style={{ color: 'black' }}>
        <div className="view-event-content">
          <h2>{specificEvent.title}</h2>
          <p>April 2020</p>
          <hr />
          <img src={specificEvent.img} alt="News " />
          <p className="event-text">{specificEvent.text}</p>
          <div className="view-event-socials">
            <span><FacebookShareButton url={`/events/${specificEvent.title}`}><FacebookIcon size={32} round={true} /></FacebookShareButton></span>
            <span><TwitterShareButton url={`/events/${specificEvent.title}`}><TwitterIcon size={32} round={true} /></TwitterShareButton></span>
            <span><WhatsappShareButton url={`/events/${specificEvent.title}`}><WhatsappIcon size={32} round={true} /></WhatsappShareButton></span>
           
          </div>
        </div>
        <div className="view-event-all">
          <div>
            <h4>Read Our Latest News</h4>
          </div>
          {events.map(event => (
            <div className="event-box" key={event.id}>
              <Link to={`/events/${event.title}`}>
                <img src={event.img} alt="news" />
                <div>
                  <h3>{event.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


export default ViewEvent;