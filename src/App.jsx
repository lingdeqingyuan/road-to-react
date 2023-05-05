import { useEffect, useState } from 'react'
import Search from './components/Search'
import List from './components/List'
import ActionBar from './components/ActionBar';

const dataList = [{
  name: 'lyj',
  age: 27
}, {
  name: 'jxx',
  age: 25
}]

function App() {
  const [list, setList] = useState([]);

  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('search') || '');

  useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm])

  useEffect(() => {
    fetchData().then(res => {
      setList(res)
      console.log(res);
    })
  }, [])

  const fetchData = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(dataList), 2000)
    })
  }

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
      <Search handleSearch={handleSearch} searchTerm={searchTerm}/>
      <ActionBar handleClickAdd={handleClickAdd} handleClickSub={handleClickSub}/>
      {list.length ? <List list={searchedList}/> : <h1>Loading</h1>}
    </div>
  )
}

export default App
