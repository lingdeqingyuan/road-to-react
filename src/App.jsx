import { useState } from 'react'
import Search from './components/Search'
import List from './components/List'
import ActionBar from './components/ActionBar';

function App() {
  const [list, setList] = useState([{name: 'lyj'}, {name: 'jxx'}]);

  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleClickAdd = (e) => {
    setList(prev => [...prev, {name: 'undefined'}])
  }

  const handleClickSub = (e) => {
    setList(prev => {
      const listCopy = [...prev];
      prev.pop();
      return listCopy;
    })
  }

  const searchedList = list.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="App">
      <Search handleSearch={handleSearch}/>
      <ActionBar handleClickAdd={handleClickAdd} handleClickSub={handleClickSub}/>
      <List list={searchedList}/>
    </div>
  )
}

export default App
