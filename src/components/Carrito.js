import { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";


const Carrito = () => {

    const { cart, clear, remove, total } = useContext(CartContext)



    return(
        <div className="container">
            {cart.length > 0 ? 
            <div>
            {cart.map(item => {
                    return (
                    <div key={item.product.id} className='d-flex justify-content-evenly' id="cart">
                    <img src={item.product.img} id="imagen"/>
                    <p>"{item.product.name}"</p>
                    <p>x {item.count} Unid.</p>
                    <p>${item.product.precio * item.count}</p>
                    <button onClick={()=>remove(item.product)} id='borrar'>X</button>
                    </div>
                )
            })}

            <div className="d-flex justify-content-evenly">
            <button onClick={clear} id='boton'> Vaciar Carrito</button>
            <h4 className="fw-bolder">$ {total} </h4>
            <button id='boton'>Terminar la Compra</button>
            </div>
            </div> 
            :
            <div id="cart">
                <h3>¡Tu carrito esta vacio!</h3>
                <Link to={'/'}>
                <button id='boton'>Volver</button>    
                </Link>
            </div>
            
        }
        </div>
    )
    }
    
    export default Carrito









