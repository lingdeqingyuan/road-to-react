import { useState } from 'react'
import Search from './components/Search'
import List from './components/List'

function App() {
  const [list, setList] = useState([{name: 'lyj'}]);
  setTimeout(() => {setList([{name: 'jxx'}])},3000)
  return (
    <div className="App">
      <Search/>
      <List list={list}/>
    </div>
  )
}

export default App
