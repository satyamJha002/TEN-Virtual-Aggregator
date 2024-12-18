import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Footer from './Components/Footer/Footer'

import VirtualNavbar from './Components/Navbar/Navbar'
import ContactUs from './Components/Pages/ContactUs/ContactUs'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    {/* <ScrollToTop/> */}
    <VirtualNavbar />
    <Routes >
   

  
    <Route path='/ContactUs' element={<ContactUs/>} />
    
      


    </Routes>
    <Footer />



    </BrowserRouter>
    
  
      
  )
}

export default App
