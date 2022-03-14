
const ItemDetail = ({products}) => {
    return (
    <div id="detail" className='container'>
        <img src={products.img} className='img-fluid' width="200px"/>
        <div>
            <h2>{products.name}</h2>
            <p>{products.aut}</p>
            <p className="fs-6 text-muted">Disponibles:{products.stock}</p>
            <div className="d-flex justify-content-evenly">
                <h3>${products.precio}</h3>
                <button id="boton">Agregar al Carrito</button>
            </div>
            <p>{products.descrip}</p>
        </div>
    </div>
)
}

export default ItemDetail