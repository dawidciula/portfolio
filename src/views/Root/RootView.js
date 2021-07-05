import PortraitPhoto from "../../components/PortraitPhoto/PortraitPhoto";
import NavBar from '../../components/NavBar/NavBar';
import MainPagePhotos from "../../components/MainPagePhotos/MainPagePhotos";
import MainHeader from "../../components/MainHeader/MainHeader";
import Description from "../../components/Description/Description";
import SideHeader from "../../components/SideHeader/SideHeader";

function Main() {
   return (
     <>
    
      <PortraitPhoto />
      <NavBar />
     
      <div className="row">
          <div className="col-6">
          <MainHeader />
          <SideHeader />
          <Description />
      </div>
      <div className="row">
          <MainPagePhotos />
      </div>
      </div>
     </>
   );
}

export default Main;
