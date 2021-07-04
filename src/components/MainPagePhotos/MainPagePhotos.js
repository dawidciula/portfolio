import React from "react";
import PhotoBox from "../PhotoBox/PhotoBox";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import "./MainPagePhotos.css";

function MainPagePhotos() {
  return (
    <div className="photoContainer">
      <div className="grid">
        <img src={photo1} className="img__photo1" />
      </div>
      <div className="grid">
        <img src={photo2} className="img__photo2" />
      </div>
      <div className="grid">
        <img src={photo3} className="img__photo3" />
      </div>
      <div className="grid"></div>
      <div className="grid">
        <img src={photo4} className="img__photo4" />
      </div>
      <div className="grid">6</div>
    </div>
  );
}

export default MainPagePhotos;
