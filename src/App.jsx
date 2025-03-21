import { useState } from 'react'
import './assets/App.css'
import CountryList from './components/CountryList/CountryList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p>hi</p>
      <CountryList />
    </>
  )
}

export default App
