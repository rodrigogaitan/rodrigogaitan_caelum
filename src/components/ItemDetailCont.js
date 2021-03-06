import { useState, useEffect } from "react"
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from "react-router-dom"
import ItemDetail from './ItemDetail'
import { toast } from "react-toastify";
import { getDocs, query, collection, where} from "firebase/firestore";
import { db } from "./Firebase";

const ItemDetailCont = () => {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const { codigo } = useParams();

useEffect(() => {
    
    const consulta = query(collection(db, 'books'), where('codigo', '==', codigo))
    getDocs(consulta)
    .then((res)=> setProducts(res.docs.map(p=> p.data())[0]))
    .catch((error404)=>{
        toast.error('Error')
      })
    .finally(()=>{
        setLoading(false)}
    )
},[codigo])   



    return(
        <div className="container">
            {loading ? <div id="loading"><Spinner animation="grow" /></div> : <ItemDetail products={products}/>}
        </div>
    )
}

export default ItemDetailCont