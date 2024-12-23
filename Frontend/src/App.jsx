import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Journals from "./Components/Pages/Journals/Journals";
import Submitpaper from "./Components/Pages/Journals/Submitpaper";
import VirtualNavbar from "./Components/Navbar/Navbar";
import Events from "./Components/Pages/Events/Events";
import AddEvent from "./Components/Pages/AddEvent/AddEvent";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import Blog from "./Components/Pages/Blog/Blog";

import Home from "./Components/Pages/Home/Home";
import FilterPage from "./Components/Pages/FilterPage/FilterPage";
function App() {
  return (
    <BrowserRouter>
      <VirtualNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/search" element={<FilterPage />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/submit" element={<Submitpaper />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/ScientificEvents" element={<Events />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
