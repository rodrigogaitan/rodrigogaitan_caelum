import {useState} from "react"
import ItemDetailCont from "./ItemDetailCont"


const Count = (props) => {
    
    const [contador, setContador]= useState(props.inicial)

    const sumar= () => {
        if(contador < props.product.stock)
        setContador(contador + 1)
    }

    const restar= () => {
        if(contador > props.inicial)
        setContador(contador - 1)
    }
    
    const onAdd=() => {}

    return(
        <div id="count">
        <h2>Cantidad</h2>
        <div id="bot">
        <button onClick={restar}>-</button>
        <p id="conta">{contador}</p>
        <button onClick={sumar}>+</button>
        </div>
        <button onClick={onAdd}>Agregar al Carrito</button>
        <p>Disponibles {props.stock}</p>
        </div>
    )
}

export default Count