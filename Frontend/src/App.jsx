import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Journals from "./Components/Pages/Journals/Journals";
import Submitpaper from "./Components/Pages/Journals/Submitpaper";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Footer />} />
        <Route path='/journals' element={<Journals />} />
        <Route path='/submit' element={<Submitpaper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
