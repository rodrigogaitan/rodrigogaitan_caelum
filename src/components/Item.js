
const Item = (props) => {
  return (
  <div id="item" className='m-2'>
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