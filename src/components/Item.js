
const Item = (props) => {
  return (
      <>
      <img src={props.img}/>
      <h1>{props.name}</h1>
      <h4>{props.precio}</h4>
      </>
  )
}

export default Item