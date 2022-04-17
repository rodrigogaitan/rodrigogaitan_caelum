import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from "react-router-dom"
import { toast } from "react-toastify";
import { getDocs, query, collection, where} from "firebase/firestore";
import { db } from "./Firebase";


const ItemListCont = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const { genero } = useParams();

    useEffect(()=>{
    
        if (genero !== undefined) {
    const consulta = query(collection(db, 'books'), where('genero', '==', genero))

    getDocs(consulta)
    .then((res)=> setProducts(res.docs.map(p=> ({...p.data(), id: p.id}))))
    .catch((error404)=>{
        toast.error('Error')
      })
    .finally(()=>{
        setLoading(false)})
        }
        else{
            getDocs(collection(db, 'books'))
            .then((res)=> setProducts(res.docs.map(p=> ({...p.data(), id: p.id}))))
            .catch((error404)=>{
                toast.error('Error')
              })
            .finally(()=>{
                setLoading(false)})
        }
},[genero])

    return(
        <div className="container">
            {loading ? <div id="loading"><Spinner animation="grow" /></div> : null}
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListCont
