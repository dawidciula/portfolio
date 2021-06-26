import React from 'react';
import NavBarHeader from '../NavBarHeader/NavBarHeader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './NavBar.css';
import AboutMeView from '../../views/Root/aboutMeView';
import ContactView from '../../views/Root/ContactView';
import PhotoGalleryView from '../../views/Root/PhotoGalleryView';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <BrowserRouter >
            <div className='wrapper'>
            
            <Link href='/About'>
                <NavBarHeader  className='aboutMe' text='O mnie' > </NavBarHeader>
            </Link>
            <Link href='/PhotoGallery'>
                <NavBarHeader text='Galeria'></NavBarHeader>
            </Link>
            <Link href='/About'>
                <NavBarHeader text='Kontakt'></NavBarHeader>
            </Link>
            <Switch>
            <Route path='/About' component={AboutMeView}/>
            <Route path='/Contact' component={ContactView}/>
            <Route path='/PhotoGallery' component={PhotoGalleryView} />
            </Switch>
            
            </div>
        </BrowserRouter>
    )
}

export default NavBar