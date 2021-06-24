import React from 'react'
import './NavBarHeader.css'

function NavBarHeader(props) {
    return (
        <a className='header'
        href=''
        >
           {props.text}
        </a>
    );
}

export default NavBarHeader