import { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";


const Carrito = () => {

    const { cart, clear, remove } = useContext(CartContext)

        console.log(cart);
    return(
        <div className="container">
        {cart.map(item => {
                return (
                <div key={item.product.id} className='row' id="cart">
                <img src={item.product.img} id="imagen"/>
                <p className="col">"{item.product.name}"</p>
                <p className="col">x {item.count} Unid.</p>
                <p className="col">${item.product.precio * item.count}</p>
                <button onClick={()=>remove(item.product)} id='borrar' className="col">X</button>
                </div>
            )
        })}
        <button onClick={clear} id='boton'> Vaciar Carrito</button>
        </div> 
    )
}

export default Carrito