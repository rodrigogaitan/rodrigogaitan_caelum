import { useContext, useState } from "react";
import Count from "./Count"
import { toast } from 'react-toastify'; 
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";


const ItemDetail = ({products}) => {

    const { addItem, cart } = useContext(CartContext)

    const [selected, setSelected] = useState(false)

    const onAdd = contador => {
        addItem(products, contador)
        toast.success('Producto añadido al carrito!', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
            });
    }

    return (
    <div id="detail">
        <img src={products.img} className='img-fluid' width="200px"/>
        <div>
            <h2>{products.name}</h2>
            <p>{products.aut}</p>
            <p className="fs-6 text-muted">Disponibles:{products.stock}</p>
            <div className="d-flex justify-content-evenly">
                <h3>${products.precio}</h3>
                {selected ? <Link to={`/carrito`} id='boton'>Ir al Carrito</Link> : <Count initial={1} stock={products.stock} onAdd={onAdd}/>}
            </div>
            <p>{products.descrip}</p>
        </div>
    </div>
)
}

export default ItemDetail