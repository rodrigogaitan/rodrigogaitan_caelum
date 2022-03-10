import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import Spinner from 'react-bootstrap/Spinner'

const items = [
    {
        id: 1,
        name: "La Hija de los Huesos",
        precio: 2300,
        img: "https://contentv2.tap-commerce.com/cover/large/9789878474120_1.jpg?id_com=1113"
    },
    {
        id: 2,
        name: "El Jardin de los Ciervos",
        precio: 1900,
        img: "https://contentv2.tap-commerce.com/cover/large/9789877253474_1.jpg?id_com=1113"
    }
]

const ItemListCont = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);


    const work = useEffect(()=>{
    
    new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
        }, 1000)
    })
    .then((respuesta)=>{
        setProducts(items)
    })
    .finally(()=>{
        setLoading(false)
    })
})

    return(
        <div id="container">
            {loading ? <div id="loading"><Spinner animation="grow" /></div> : null}
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListCont