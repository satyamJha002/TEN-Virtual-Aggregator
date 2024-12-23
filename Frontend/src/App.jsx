import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Journals from "./Components/Pages/Journals/Journals";
import Submitpaper from "./Components/Pages/Journals/Submitpaper";
import Navbar from "./Components/Navbar/Navbar";
import Events from "./Components/Pages/Events/Events";
import AddEvent from "./Components/Pages/AddEvent/AddEvent";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import Blog from "./Components/Pages/Blog/Blog";

import Home from "./Components/Pages/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/submit" element={<Submitpaper />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Contact-us" element={<ContactUs />} />
        <Route path="/ScientificEvents" element={<Events />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
