import {Link} from 'react-router-dom';
export default function Item({id, name, price, img}){

    return(
        <div className="flex flex-col items-center my-[20px] m-1 p-2">
            <Link to={`/products/${id}`} className="rounded hover:scale-105 transition-all duration-500 cursor-pointer h-80"><img className="rounded w-[340px] h-[340px]" src={img} alt="Imagen Productos" /></Link>
            <Link to={`/products/${id}`} className="pt-[20px] text-[18px] font-bold my-[15px] tracking-[3px] uppercase text-[white] hover:text-[red] hover:scale-105 transition-all duration-500 cursor-pointer">{name}</Link>
            <h4 className="text-[17px] font-bold mb-[20px] uppercase text-[lightblue] hover:scale-105 transition-all duration-500 cursor-pointer">${price} USD</h4>
        </div>
    )
}