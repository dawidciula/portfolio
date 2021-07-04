import React, { Component } from "react";
import NavBarHeader from "../NavBarHeader/NavBarHeader";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./NavBar.css";
import AboutMeView from "../../views/Root/aboutMeView";
import ContactView from "../../views/Root/ContactView";
import PhotoGalleryView from "../../views/Root/PhotoGalleryView";

class NavBar extends Component {
    render(){
  return (
    <BrowserRouter>
    <div>
      <ul className="wrapper">
        <li>
          <Link to="/about" target="_blank">O mnie</Link>
        </li>
        <li>
          <Link to="/gallery">Galeria</Link>
        </li>
        <li>
          <Link to="/contact">Kontakt</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/about">
          <AboutMeView />
        </Route>
        <Route exact path="/contact">
          <ContactView />
        </Route>
        <Route exact path="/gallery">
          <PhotoGalleryView />
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}
}
export default NavBar;
