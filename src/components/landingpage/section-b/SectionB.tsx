import React from 'react';
import Events from './Event';
import Gallery from './GalleryGridList';

interface Props {

}

const SectionB : React.FC<Props> = () => {
        return (
            <>
            <Events/>
            <Gallery/>
            </>
        );
}


export default SectionB;