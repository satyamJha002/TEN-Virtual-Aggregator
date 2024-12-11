import { useState } from 'react'

import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes >
      <Route path='/' element={<Footer/>} />


    </Routes>



    </BrowserRouter>
    
  
      
  )
}

export default App
