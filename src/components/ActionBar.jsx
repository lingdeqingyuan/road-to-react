const ActionBar = ({handleClickAdd, handleClickSub}) => {
  return (
    <>
        <button onClick={handleClickAdd}>Add</button>
        <button onClick={handleClickSub}>Sub</button>
    </>
  )
};

export default ActionBar;