import Item from "./Item"

const ItemList = ({products}) => {

    return (
        <div id="itemList" className="row">
            {products.map((item) => {
                return (
                        <Item key={item.id} item={item}/>
                    )
            }
            )
            }
        </div>
    )
}

export default ItemList
