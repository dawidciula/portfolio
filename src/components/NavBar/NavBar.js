import React from 'react';
import NavBarHeader from '../NavBarHeader/NavBarHeader';
import './NavBar.css';

function NavBar() {
    return (
        <div className='wrapper'>
            <NavBarHeader text='O mnie'></NavBarHeader>
            <NavBarHeader text='Galeria'></NavBarHeader>
            <NavBarHeader text='Kontakt'></NavBarHeader>
        </div>
    );
}

export default NavBar