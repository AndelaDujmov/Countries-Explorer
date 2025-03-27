import './assets/App.css'
import NavigationBar from './components/NavigationBar/NavigationBar'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NotFound from './pages/ErrorPages/NotFound'
import BadRequest from './pages/ErrorPages/BadRequest'
import { useState } from 'react'

function App() {

  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <NavigationBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path='/' element={<HomePage searchQuery={searchQuery} />} />
        <Route path='/country/:code' element={<AboutPage />} />
        <Route path='/badRequest' element={<BadRequest />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
