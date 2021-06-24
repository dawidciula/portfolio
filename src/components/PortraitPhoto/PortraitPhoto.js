import React from 'react';
import './PortraitPhoto.css';
import photo1 from '../assets/photo1.jpg';

function PortraitPhoto() {
    return (
        <img
        className='portraitPhoto'
        src={photo1} 
        alt='portraitPhoto'
        />
    );
}

export default PortraitPhoto