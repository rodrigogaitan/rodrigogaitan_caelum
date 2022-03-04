import { useState } from "react"
import Item from "./Item"

const ItemList = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: "La Hija de los Huesos",
            precio: 2300,
            img: "https://contentv2.tap-commerce.com/cover/large/9789878474120_1.jpg?id_com=1113"
        },
        {
            id: 2,
            name: "El Jardin de los Ciervos",
            precio: 1900,
            img: "https://contentv2.tap-commerce.com/cover/large/9789877253474_1.jpg?id_com=1113"
        }
    ])



    return (
        <>
            {items.map((item) => {
                return (
                    <Item key={item.id} name={item.name} precio={item.precio} img={item.img} />
                )
                }   
            )
            }

        </>
    )
}

export default ItemList
