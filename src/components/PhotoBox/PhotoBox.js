import React from 'react'
import './PhotoBox.css'

function PhotoBox(props) {
    return (
        <img 
        className={props.whichSide}
        alt='pictureBox'
        src={props.image}
        />
    );
}

export default PhotoBox