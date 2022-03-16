import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Main/>
            <Footer/>
            <ToastContainer/>
        </BrowserRouter>
    )
}

export default App