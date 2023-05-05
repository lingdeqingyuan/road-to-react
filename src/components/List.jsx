import Item from './Item'

const List = (props) => {
  const { list } = props;
  return (
    <div>
      <ul>
        {list.map(item => {
          return (
            <Item key={item.name} item={item}/>
          )
        })}
      </ul>
    </div>
  );
};

export default List;
