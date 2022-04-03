import { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { db } from "./Firebase";
import { addDoc , collection , serverTimestamp } from "firebase/firestore"


const Carrito = () => {

    const { cart, clear, remove, total } = useContext(CartContext)

    const check = () => {

        const orden = {
            buyer : {
                name : "Rodrigo",
                email : "rodrigo@caelum.com",
                number: "123456789"
            },
            items : cart,
            date : serverTimestamp(),
            total : total
    }

    const ordenColection = collection(db, "orders")
    const orderRef = addDoc(ordenColection, orden)

    orderRef
    .then((res)=>{
        toast('📕 Pedido: ' + res.id, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        clear()
    })
    }


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
            {/* <Link to={'/checkout'}> */}
            <button onClick={check} id='boton'>Terminar la Compra</button>
            {/* </Link> */}
            </div>
            </div> 
            :
            <div id="cart">
                <h3>¡Muchas Gracias Por Tu Compra!</h3>
                <Link to={'/'}>
                <button id='boton'>Volver</button>    
                </Link>
            </div>
            
        }
        </div>
    )
    }
    
    export default Carrito









