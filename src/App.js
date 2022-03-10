import Nav from './components/Nav'
import ItemListCont from './components/ItemListCont'
import ItemDatailCont from './components/ItemDetailCont'

function App() {
    return (
        <>
            <Nav />
            <ItemListCont greeting='¡Hola!'/>
            <ItemDatailCont/>
        </>
    )
}

export default App