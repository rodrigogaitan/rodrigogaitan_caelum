import Card from './Card'

const Nav = () => {
    return(
    <header id='nav'>
        <h1><a href='#'>caelum</a></h1>
            <nav>
                <a href="#" >products</a>
                <a href="#" >contact</a>
                <a href="#" >more</a>
                <a href="#"><Card /></a>
            </nav>
    </header>
    )
}

export default Nav