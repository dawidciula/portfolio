
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutMeView from "./aboutMeView";
import ContactView from "./ContactView";
import PhotoGalleryView from "./PhotoGalleryView";
import Main from "./RootView";
function App() {
  return (
    <BrowserRouter>
   

      <Switch>
        <Route exact path="/">
          <Main />
          </Route>
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
    </BrowserRouter>
  );
}

export default App;
