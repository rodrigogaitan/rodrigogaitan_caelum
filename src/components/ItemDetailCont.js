import { useState, useEffect } from "react"
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from "react-router-dom"
import ItemDetail from './ItemDetail'
import { items } from './ItemListCont'
import { toast } from "react-toastify";

const ItemDetailCont = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);
    const { codigo } = useParams();

useEffect(() => {
    setLoading(true);
    const pedido = new Promise((res, rej) => {
        setTimeout(() => {
            res(items);
        }, 2000)
    })

    pedido
        .then((res) => {
            const result = items.find(product => {
                return (product.codigo === codigo); 
            })
            setProducts(result);

        })
        .catch((rej) => {
            toast.error("Error al cargar los productos!");
            setError(true);
        })
        .finally(() => {
            setLoading(false);
        })
}, [])


    return(
        <div className="container">
            {loading ? <div id="loading"><Spinner animation="grow" /></div> : <ItemDetail products={products}/>}
        </div>
    )
}

export default ItemDetailCont