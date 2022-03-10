import { useState, useEffect } from "react"
import Spinner from 'react-bootstrap/Spinner'
import ItemDetail from './ItemDetail'

let item = 
    {
        id: 1,
        name: "La Hija de los Huesos",
        aut:'Andrea Stewart',
        precio: 2300,
        img: "https://contentv2.tap-commerce.com/cover/large/9789878474120_1.jpg?id_com=1113",
        stock: 14,
        descrip: 'En todas las islas del Imperio, se extrae detrás de la oreja de cada niño un trozo de hueso, durante un ritual que con demasiada frecuencia es fatal. Desde su palacio, el emperador utiliza estos preciosos fragmentos para crear y controlar formidables quimeras animales, los constructos que mantienen la ley y el orden. Pero su autoridad flaquea y la rebelión ruge por todas partes. Lin ha perdido sus recuerdos y pasa sus días en el enorme palacio lleno de puertas cerradas y oscuros secretos. Cuando su padre se niega a reconocerla como heredera del trono, ella promete demostrar su valía dominando el arte prohibido sobre la magia de los huesos. Magia que tiene un precio. Cuando la revolución golpee las puertas del palacio, Lin tendrá que decidir hasta dónde está dispuesta a llegar para reclamar su herencia y salvar a su pueblo'

    }

const ItemDetailCont = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
    const work = 
    
    new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(item)
        }, 1000)
    })
    .then((respuesta)=>{
        setProducts(item)
    })
    .finally(()=>{
        setLoading(false)
    })
})

    return(
        <div id="container">
            {loading ? <div id="loading"><Spinner animation="grow" /></div> : null}
            <ItemDetail products={products}/>
        </div>
    )
}

export default ItemDetailCont