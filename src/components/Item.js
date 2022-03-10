
const Item = (props) => {
  return (
  <div id="item" className='col-12 md-6 m-3'>
    <img src={props.img} className='img-fluid' width="200px"/>
      <div>
        <h2>{props.name}</h2>
        <p>${props.precio}</p>
        <button>Ver Más</button>
      </div>
  </div>
)
}

export default Item