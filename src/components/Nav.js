import { Link , NavLink } from "react-router-dom";
import Card from './Card'
import { CartContext } from "./CartContext";
import { useContext } from "react";


const Nav = () => {

    const {cartCount} = useContext(CartContext)

    return(
    <header id='nav'>
        <Link to={'/'}>
        <h1 id='logo'>caelum</h1>    
        </Link>
            <nav>
                <NavLink to={'/tipo/fantasia'} id='mov'>fantasia</NavLink>
                <NavLink to={'/tipo/terror'} id='mov'>terror</NavLink>
                <NavLink to={'/tipo/historico'} id='mov'>historico</NavLink>
                <NavLink to={'/tipo/policial'} id='mov'>policial</NavLink>
                {cartCount === 0 || <NavLink to={'/carrito'} id='mov'><Card/></NavLink> }      
            </nav>
    </header>
    )
}

export default Nav