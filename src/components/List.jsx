import Item from './Item'

const List = (props) => {
  const { list } = props;
  return (
    <div>
      <ul>
        {list.map(item => {
          return (
            <Item item={item}/>
          )
        })}
      </ul>
    </div>
  );
};

export default List;
