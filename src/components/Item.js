import { Link } from "react-router-dom";

const Item = ({item}) => {
  return (
  <div id="item" className='col-12 md-6 m-3'>
    <img src={item.img} className='img-fluid'/>
      <div>
        <h2>{item.name}</h2>
        <p>${item.precio}</p>
          <Link to={`/detalle/${item.codigo}`} id='boton'>Ver Más</Link>
      </div>
  </div>
)
}

export default Item