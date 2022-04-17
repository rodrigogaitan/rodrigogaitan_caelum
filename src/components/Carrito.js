import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { db } from "./Firebase";
import { addDoc , collection , serverTimestamp } from "firebase/firestore"


const Carrito = () => {

    const { cart, clear, remove, total } = useContext(CartContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    
    const subirName = (e) => {
        const value = e.target.value
        setName(value)
    }
    const subirEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }

    const check = () => {

        const orden = {
            buyer : {
                name : name,
                email : email,
            },
            items : cart,
            date : serverTimestamp(),
            total : total
    }


    const ordenColection = collection(db, "orders")
    const orderRef = addDoc(ordenColection, orden)

    orderRef
    .then((res)=>{
        toast.info('En breve recibiras un email de confirmacion de tu pedido: ' + email,{ 
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        toast.success('📕 Pedido: ' + res.id, {
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
            <div className="d-flex justify-content-between">
                    <div>
                        {cart.map(item => {
                                return (
                                <div key={item.product.id} className='row' id="cart">
                                <img src={item.product.img} id="imagen" className="col"/>
                                <p className="col">"{item.product.name}"</p>
                                <p className="col">x {item.count} Unid.</p>
                                <p className="col">${item.product.precio * item.count}</p>
                                <button onClick={()=>remove(item.product)} id='borrar' className="col">X</button>
                                </div>
                            )
                        })}

                    <div className="d-flex justify-content-center">
                        <h4 className="fw-bolder">Total : $ {total} </h4></div>
                    <button onClick={clear} id='boton'> Vaciar Carrito</button>
                        
                    </div> 
                    <div id="form">
                        <div>
                        <h5 className="text-center m-3 fw-bolder">Completa tus datos:</h5>
                            <div>
                                <p>Nombre</p>
                                <input id="name" name="name" value={name} onChange={subirName}/>
                            </div>
                            <hr />
                            <div>
                                <p>Email</p>
                                <input id="email" name="email" value={email} onChange={subirEmail}/>
                            </div>
                            <hr />
                            <button onClick={check} id='boton'>Terminar la Compra</button>
                        </div>
                    </div>
            </div>

            :

            <div className="text-center m-4" id="border">
                <h3>¡Carrito Vacio!</h3>
                <Link to={'/tipo'}><button id='boton'>Volver</button></Link>
            </div>
            
        }
        </div>
    )
    }
    
    export default Carrito









