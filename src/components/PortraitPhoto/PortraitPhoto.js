import React from 'react';
import './PortraitPhoto.css';
import photo6 from '../assets/photo6.jpg';

function PortraitPhoto() {
    return (
        <img
        className='portraitPhoto'
        src={photo6} 
        alt='portraitPhoto'
        />
    );
}

export default PortraitPhoto