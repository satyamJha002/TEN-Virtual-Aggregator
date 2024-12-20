import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Journals from "./Components/Pages/Journals/Journals";
import Submitpaper from "./Components/Pages/Journals/Submitpaper";
import VirtualNavbar from "./Components/Navbar/Navbar";
import Events from "./Components/Pages/Events/Events";
import AddEvent from "./Components/Pages/AddEvent/AddEvent";
function App() {
  return (
    <BrowserRouter>
      <VirtualNavbar />
      <Routes>
        <Route path="/" element={<Footer />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/submit" element={<Submitpaper />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route path='/ScientificEvents' element={<Events />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
