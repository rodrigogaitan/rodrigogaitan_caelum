import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProv = ({children}) => {

    const [cart, setCart] = useState([])

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
    }

    const remove = (product) => {
        if (isInCart(product)) {
            const cartAux = cart.filter(item => item.product !== product)
            setCart(cartAux)
        }
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (product) => {
        return cart && cart.some(item => item.product == product)
    }

    return(
        <CartContext.Provider value={{
            addItem,
            remove,
            clear,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

