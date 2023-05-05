import { BASE_URL } from "../App";

const Search = ({handleSearch, searchTerm, setUrl}) => {

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input onChange={handleSearch} type="text" id="name" value={searchTerm} />
      <button onClick={() => setUrl(`${BASE_URL}?query=${searchTerm}`)}>Search</button>
    </div>
  );
};

export default Search;
