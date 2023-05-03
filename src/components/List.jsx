const List = (props) => {
  const { list } = props;
  return (
    <div>
      <ul>
        {list.map(item => {
          return (
            <li>{item.name}</li>
          )
        })}
      </ul>
    </div>
  );
};

export default List;
