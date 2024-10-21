import './App.css';
import Home from './component/Home/Home.jsx';
import Footer from '../src/component/Footer/Footer.jsx';
import Header from '../src/component/Header/Header_1.jsx';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import SteamDeck from "../src/component/SteamDeck/SteamDeck.jsx";
import XboxSeries from "./component/XboxSeries/XboxSeries.jsx";
import PS5 from "./component/PS5/PS5.jsx";
import NintendoSwitch from "./component/NintendoSwitch/NintendoSwitch.jsx";
import SobreNosotros from "./component/SobreNosotros/SobreNosotros.jsx";
import Historia from "./component/Historia/Historia.jsx";
import Contactanos from "./component/Contactanos/Contactanos.jsx";
import Products from "./component/Products/Products.jsx";
function App() {

  return (
      <>
          <BrowserRouter>
              <Header/>
                  <Routes>
                      <Route path="" element={<Home/>}/>
                      <Route path="/SteamDeck" element={<SteamDeck/>}/>
                      <Route path="/XboxSeries" element={<XboxSeries/>}/>
                      <Route path="/PS5" element={<PS5/>}/>
                      <Route path="/NintendoSwitch" element={<NintendoSwitch/>}/>
                      <Route path="/SobreNosotros" element={<SobreNosotros/>}/>
                      <Route path="/Historia" element={<Historia/>}/>
                      <Route path="/Contactanos" element={<Contactanos/>}/>
                      <Route path="/Productos" element={<Products/>}/>
                  </Routes>
              <Footer/>
          </BrowserRouter>
      </>
  )
}

export default App
