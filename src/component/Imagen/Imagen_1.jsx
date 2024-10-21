import "./Imagen_1.css";
import Imagen_ps5 from "../../assets/image/ps5-imagen.png"
import Imagen_xbox from "../../assets/image/xbox_imagen.png"
const Imagen_1 = () => {
    return(
        <>
            <section className="image-container">
                <div className="row">
                    <div className="col-6">
                        <img src={Imagen_xbox} alt="..."/>
                    </div>
                    <div className="col-6">
                        <img src={Imagen_xbox} alt="..."/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Imagen_1