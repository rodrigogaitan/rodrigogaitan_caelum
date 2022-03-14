import { Link , NavLink } from "react-router-dom";
import Card from './Card'


const Nav = () => {
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
                <NavLink to={'/carrito'}><Card/></NavLink>
            </nav>
    </header>
    )
}

export default Nav