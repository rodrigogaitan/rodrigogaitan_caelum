import { Route, Router, Routes } from "react-router-dom";
import ItemListCont from "./ItemListCont";
import Carrito from './Carrito'
import ItemDetailCont from './ItemDetailCont'

const Main = () => {
    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListCont/>}/>
                <Route path="/tipo/:genero" element={<ItemListCont/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
                <Route path="/detalle/:codigo" element={<ItemDetailCont/>}/>
            </Routes>

        </main>
    )
}

export default Main