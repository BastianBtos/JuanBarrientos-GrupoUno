import './App.css';
import Home from './component/Home/Home.jsx';
import Footer from '../src/component/Footer/Footer.jsx';
import Header from '../src/component/Header/Header_1.jsx';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import SteamDeck from "../src/component/SteamDeck/SteamDeck.jsx";
import XboxSeries from "./component/XboxSeries/XboxSeries.jsx";
import PS5 from "./component/PS5/PS5.jsx";
import NintendoSwitch from "./component/NintendoSwitch/NintendoSwitch.jsx";
import About from "./component/About/About.jsx";
import History from "./component/History/History.jsx";
import Contact from "./component/Contact/Contact.jsx";
import Products from "./component/Products/Products.jsx";
function App() {

  return (
      <>
          <BrowserRouter>
              <Header/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/steamdeck" element={<SteamDeck/>}/>
                  <Route path="/xboxseries" element={<XboxSeries/>}/>
                  <Route path="/ps5" element={<PS5/>}/>
                  <Route path="/nintendoswitch" element={<NintendoSwitch/>}/>
                  <Route path="/sobrenosotros" element={<About/>}/>
                  <Route path="/historia" element={<History/>}/>
                  <Route path="/contactanos" element={<Contact/>}/>
                  <Route path="/productos" element={<Products/>}/>
              </Routes>
              <Footer/>
          </BrowserRouter>
      </>
  )
}

export default App
