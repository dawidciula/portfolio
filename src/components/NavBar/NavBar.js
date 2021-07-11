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
    <div>
      <ul className="wrapper">
        <li>
          <Link to="/about">O mnie</Link>
        </li>
        <li>
          <Link to="/gallery">Galeria</Link>
        </li>
        <li>
          <Link to="/contact">Kontakt</Link>
        </li>
      </ul>

   
      </div>
  );
}
}
export default NavBar;



