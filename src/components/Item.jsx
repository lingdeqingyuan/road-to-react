const Item = ({item, handleDeteleItem}) => {
  return (
    <>
      <li>{item.title}</li>
      <button onClick={() => handleDeteleItem(item.objectId)}>Detete Item</button>
    </> 
  )
}

export default Item;