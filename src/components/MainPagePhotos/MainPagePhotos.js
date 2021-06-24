import React from 'react'
import PhotoBox from '../PhotoBox/PhotoBox'
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'
import photo4 from '../assets/photo4.jpg'
import './MainPagePhotos.css'


function MainPagePhotos() {
    return (
        <div className='photoContainer'>
        <PhotoBox image={photo1}></PhotoBox>
        </div>
    );
}

export default MainPagePhotos