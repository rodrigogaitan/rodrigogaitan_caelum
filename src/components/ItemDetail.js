import Count from "./Count"


const ItemDetail = (props) => {
    return (
    <div id="detail" className='container'>
        <img src={props.products.img} className='img-fluid' width="200px"/>
        <div>
            <h2>{props.products.name}</h2>
            <p>{props.products.aut}</p>
            <p className="fs-6 text-muted">Disponibles:{props.products.stock}</p>
            <div className="d-flex justify-content-evenly">
                <h3>${props.products.precio}</h3>
                <button>Agregar al Carrito</button>
            </div>
            <p>{props.products.descrip}</p>
        </div>
    </div>
)
}

export default ItemDetail