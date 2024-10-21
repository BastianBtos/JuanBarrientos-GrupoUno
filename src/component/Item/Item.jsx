export default function Item({id, name, price, img, despcription}){

    return(
        <div className="flex flex-col items-center my-[20px] m-2 p-2">
            <img className="rounded hover:scale-105 transition-all duration-500 cursor-pointer h-80" src={img} alt="Imagen Productos"/>
            <h3 className="text-[18px] font-bold my-[15px] tracking-[3px] uppercase text-[white] hover:text-[red] hover:scale-105 transition-all duration-500 cursor-pointer">{name}</h3>
            <h4 className="text-[17px] font-bold mb-[20px] uppercase text-[lightblue] hover:scale-105 transition-all duration-500 cursor-pointer">${price}</h4>
        </div>
    )
}