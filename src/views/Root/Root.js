import PortraitPhoto from "../../components/PortraitPhoto/PortraitPhoto";
import NavBar from '../../components/NavBar/NavBar';
import MainPagePhotos from "../../components/MainPagePhotos/MainPagePhotos";
import MainHeader from "../../components/MainHeader/MainHeader";
import Description from "../../components/Description/Description";
import SideHeader from "../../components/SideHeader/SideHeader";

function App() {
   return (
     <>
      <PortraitPhoto></PortraitPhoto>
      <NavBar></NavBar>
      <MainPagePhotos></MainPagePhotos>
      <MainHeader></MainHeader>
      <SideHeader></SideHeader>
      <Description></Description>
     </>
   );
}

export default App;
