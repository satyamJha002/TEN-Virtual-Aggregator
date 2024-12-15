import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Journals from "./Components/Pages/Journals/Journals";
import SubmitPaper from "./Components/Pages/Journals/Submitpaper";
import Card from "./Components/Pages/Journals/Card";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Footer />} />
        <Route path='/journals' element={<Journals />} />
        <Route path='/submit' element={<SubmitPaper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
