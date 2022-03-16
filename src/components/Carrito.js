import { useEffect } from "react";
import { useState } from "react";
import Spinner from 'react-bootstrap/Spinner'
import { toast } from "react-toastify";


const Carrito = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [cart, setCart] = useState()


    useEffect(()=>{
        const work = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(cart)
            }, 1000)
        })
        .then((respuesta)=>{
            setCart(cart)
        })
        .catch((rej) => {
            toast.error("Error al cargar los productos!");
            setError(true);
        })
        .finally(()=>{
            setLoading(false)
        })
        })
        
    return(
        <div className="container">
        {loading ? <div id="loading"><Spinner animation="grow" /></div> : <h2 id="saludo">¡Hubo un inconveniente, te pedimos disculpas, volver a intentar en unos minutos!</h2>}
        </div> 
    )
}

export default Carrito