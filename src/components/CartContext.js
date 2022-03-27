import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext()

export const CartContextProv = ({children}) => {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [cartCount, setCartCount] = useState(0)

    const addItem = (product, count) => {
        let CartPro = {product, count}
        let CartAux = []

        if(isInCart(product)){
            CartPro = cart.find(item => item.product == product)
            CartPro.count =  CartPro.count + count
            CartAux = [...cart]
        }
        else{
            CartAux = [CartPro, ...cart ]
        }
        setCart(CartAux)

        let tempTotalPrecio = 0;
        let tempCartCount = 0;

        tempTotalPrecio = total;
        tempTotalPrecio += (product.precio * count);
        setTotal(tempTotalPrecio);

        tempCartCount = cartCount;
        tempCartCount += count;
        setCartCount(tempCartCount);

    }

    const remove = (product) => {
        if (isInCart(product)) {

            let tempTotalPrice = 0;
            let tempCartCount = 0;

            const cartAux = cart.filter(item => item.product !== product)
            setCart(cartAux)

            cartAux.forEach((item) => {
                tempTotalPrice += (item.product.precio * item.count);
                setTotal(tempTotalPrice);

                tempCartCount += item.count;
                setCartCount(tempCartCount);
            });
            setCart(cartAux);
        }
    }
    

    const clear = () => {
        setCart([])
        setTotal(0)
        setCartCount(0)
        toast.info('Se vacío el carrito', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            });  
    }

    const isInCart = (product) => {
        return cart && cart.some(item => item.product == product)
    }

    const valueProvider = {
        cart,
        addItem,
        remove,
        clear,
        cartCount,
        total
    }

    return(
        <CartContext.Provider value={valueProvider}>
            {children}
        </CartContext.Provider>
    )
}

