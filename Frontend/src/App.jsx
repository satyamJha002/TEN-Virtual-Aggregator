import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Journals from "./Components/Pages/Journals/Journals";
import Submitpaper from "./Components/Pages/Journals/Submitpaper";
import VirtualNavbar from "./Components/Navbar/Navbar";
import Events from "./Components/Pages/Events/Events";
import AddEvent from "./Components/Pages/AddEvent/AddEvent";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import Blog from "./Components/Pages/Blog/Blog";

import Home from "./Components/Pages/Home/Home";
import Faq from "./Components/Pages/Faq/Faq";
import PrivacyPolicy from "./Components/Pages/PrivacyPolicy/PrivacyPolicy";
function App() {
  return (
    <BrowserRouter>
      <VirtualNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/submit" element={<Submitpaper />} />
        <Route path="/addevents" element={<AddEvent />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/ScientificEvents" element={<Events />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
