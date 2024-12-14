import { useState } from 'react'

import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Footer from './Components/Footer/Footer'
import Journals from './Components/Pages/Journals/Journals'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes >
      <Route path='/' element={<Footer/>} />
      <Route path='/journals' element={<Journals/>} />

    </Routes>



    </BrowserRouter>
    
  
    </>
  )
}

export default App