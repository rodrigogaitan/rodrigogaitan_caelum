import { useContext } from "react";
import Count from "./Count"
import { toast } from 'react-toastify'; 
import { CartContext } from "./CartContext";


const ItemDetail = ({products}) => {

    const { addItem } = useContext(CartContext)

    const onAdd = contador => {
        addItem(products, contador)
        toast.success('🛒 Agregado al Carrito', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
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
                <Count initial={1} stock={products.stock} onAdd={onAdd}/>
            </div>
            <p>{products.descrip}</p>
        </div>
    </div>
)
}

export default ItemDetail