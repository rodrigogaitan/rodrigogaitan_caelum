import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import { CartContextProv } from "./CartContext"

function App() {
    return (
        <CartContextProv>
            <BrowserRouter>
                <Nav />
                <Main/>
                <Footer/>
                <ToastContainer/>
            </BrowserRouter>
        </CartContextProv>
    )
}

export default App