const Search = ({handleSearch, searchTerm}) => {

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input onChange={handleSearch} type="text" id="name" value={searchTerm} />
    </div>
  );
};

export default Search;
