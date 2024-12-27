import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import LibraryTable from './components/LibraryTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/librarytable" element={<LibraryTable/>}/>
    </Routes>
    </>
  )
}

export default App
