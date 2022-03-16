import {useState} from "react"
import ItemDetailCont from "./ItemDetailCont"


const Count = ({stock,initial,onAdd}) => {
    
    const [contador, setContador]= useState(initial)

    const sumar= () => {
        if(contador < stock)
        setContador(contador + 1)
    }

    const restar= () => {
        if(contador > initial)
        setContador(contador - 1)
    }
    

    return(
        <div id="count">
        <div id="bot">
        <button onClick={restar} id='boton'>-</button>
        <p id="conta">{contador}</p>
        <button onClick={sumar} id='boton'>+</button>
        </div>
        <button onClick={onAdd} id='boton'>Agregar al Carrito</button>
        </div>
    )
}

export default Count