import PortraitPhoto from "../../components/PortraitPhoto/PortraitPhoto";
import NavBar from '../../components/NavBar/NavBar';
import MainPagePhotos from "../../components/MainPagePhotos/MainPagePhotos";
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
   return (
     <>
      <PortraitPhoto></PortraitPhoto>
      <NavBar></NavBar>
      <MainPagePhotos></MainPagePhotos>
     </>
   );
}

export default App;
