import Count from "./Count"

const ItemListCont = () => {

    const onAdd = () => {}

    return(
        <>
        <div id="saludo"><Count inicial={1} stock={5} onAdd={onAdd}/></div>
        </>
    )
}

export default ItemListCont