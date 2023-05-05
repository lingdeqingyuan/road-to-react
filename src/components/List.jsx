import Item from './Item'

const List = (props) => {
  const { list, handleDeteleItem } = props;
  return (
    <div>
      <ul>
        {list.map(item => {
          return (
            <Item key={item.objectId} handleDeteleItem={handleDeteleItem} item={item}/>
          )
        })}
      </ul>
    </div>
  );
};

export default List;
