import { useEffect, useState } from 'react'
import Search from './components/Search'
import List from './components/List'
import ActionBar from './components/ActionBar';
import axios from 'axios';
import Form from './components/Form';

const dataList = [{
  name: 'lyj',
  age: 27
}, {
  name: 'jxx',
  age: 25
}]

export const BASE_URL = 'https://hn.algolia.com/api/v1/search'

function App() {
  const [list, setList] = useState([]);

  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('search') || '');

  const [url, setUrl] = useState(`${BASE_URL}?query=`)

  useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm])

  useEffect(() => {
    fetchData().then(res => {
      setList(res.data.hits)
    })
  }, [url])

  const fetchData = () => {
    return axios.get(url)
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

  const deleteItem = (objectId) => {
    setList(prev => {
      const listCopy = [...prev];
      const index = listCopy.findIndex(item => item.objectId === objectId);
      listCopy.splice(index, 1);
      return listCopy;
    })
  }

  // const searchedList = list.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="App">
      <Form/>
      <Search handleSearch={handleSearch} searchTerm={searchTerm} setUrl={setUrl}/>
      <ActionBar handleClickAdd={handleClickAdd} handleClickSub={handleClickSub}/>
      {list.length ? <List list={list} handleDeteleItem={deleteItem}/> : <h1>Loading</h1>}
    </div>
  )
}

export default App
