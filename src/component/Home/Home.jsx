import './Home.css';
import React from "react";
import Texto_1 from "../Texto/Texto_1.jsx";
import Item_list from "../ItemList/Item_list.jsx";
import Loading from "../Loading/Loading.jsx"

function Home() {

    return (
        <>
            <div className="body_fondo">
                <Texto_1 Titulo="BIENVENIDO A STEAM CONSOLAS"
                         Parrafo="¡Bienvenido a steam consolas! 🎮

Aquí encontrarás todo lo que necesitas para disfrutar de la mejor experiencia de juego. Desde las últimas novedades hasta accesorios imprescindibles, tenemos lo que buscas. Navega por nuestra selección, descubre ofertas exclusivas y prepárate para sumergirte en mundos increíbles.

¡Comienza tu aventura con nosotros hoy mismo!"/>
            </div>
        </>
    )
}

export default Home