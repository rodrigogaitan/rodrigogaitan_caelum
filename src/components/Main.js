import { Route, Router, Routes } from "react-router-dom";
import ItemListCont from "./ItemListCont";
import Carrito from './Carrito'
import ItemDetailCont from './ItemDetailCont'
import Home from "./Home";

const Main = () => {
    return(
        <main>
            <Routes>
                <Route path="/" element={<Home/>}/> 
                <Route path="/tipo" element={<ItemListCont/>}/>
                <Route path="/tipo/:genero" element={<ItemListCont/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
                <Route path="/detalle/:codigo" element={<ItemDetailCont/>}/>
            </Routes>

        </main>
    )
}

export default Main