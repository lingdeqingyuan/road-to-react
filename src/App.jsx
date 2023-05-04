import { useState } from 'react'
import Search from './components/Search'
import List from './components/List'

function App() {
  const [list, setList] = useState([{name: 'lyj'}, {name: 'jxx'}]);

  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const searchedList = list.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="App">
      <Search handleSearch={handleSearch}/>
      <List list={searchedList}/>
    </div>
  )
}

export default App
