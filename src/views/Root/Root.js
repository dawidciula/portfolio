import PortraitPhoto from "../../components/PortraitPhoto/PortraitPhoto";
import NavBar from '../../components/NavBar/NavBar';
import MainPagePhotos from "../../components/MainPagePhotos/MainPagePhotos";
<<<<<<< HEAD
import MainHeader from "../../components/MainHeader/MainHeader";
import Description from "../../components/Description/Description";
import SideHeader from "../../components/SideHeader/SideHeader";
=======
import { BrowserRouter, Route } from 'react-router-dom';
>>>>>>> 2e26f10dab957cfe11901c035875dc4eab20f6fa

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
