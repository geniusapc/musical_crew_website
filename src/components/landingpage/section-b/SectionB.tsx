import React from 'react';
import Events from './Event';

interface Props {

}

const SectionB: React.FC<Props> = () => {
  return (
    <div id="events">
      <Events />
    </div>
  );
}


export default SectionB;