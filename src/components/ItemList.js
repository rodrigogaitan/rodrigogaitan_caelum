import Item from "./Item"

const ItemList = (props) => {

    return (
        <div id="itemList" className="row">
            {props.products.map((item) => {
                return (
                        <Item key={item.id} name={item.name} precio={item.precio} img={item.img}/>
                    )
            }
            )
            }
        </div>
    )
}

export default ItemList
