import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Service from './pages/Service'
import Contact from './pages/Contact' 

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/service' element={<Service />} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </>
  )
}

export default App