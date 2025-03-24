import './assets/App.css'
import NavigationBar from './components/NavigationBar/NavigationBar'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NotFound from './pages/ErrorPages/NotFound'
import BadRequest from './pages/ErrorPages/BadRequest'

function App() {

  return (
    <>
      <NavigationBar />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/country/:code' element={<AboutPage />} />
          <Route path='/badRequest' element={<BadRequest />}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
