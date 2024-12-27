import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Journals from "./Components/Pages/Journals/Journals";
import Submitpaper from "./Components/Pages/Journals/Submitpaper";
import Navbar from "./Components/Navbar/Navbar";
import Events from "./Components/Pages/Events/Events";
import AddEvent from "./Components/Pages/AddEvent/AddEvent";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import Blog from "./Components/Pages/Blog/Blog";
import Home from "./Components/Pages/Home/Home";
import FilterPage from "./Components/Pages/FilterPage/FilterPage";
import Faq from "./Components/Pages/Faq/Faq";
// import PrivacyPolicy from "./Components/Pages/PrivacyPolicy/PrivacyPolicy";
import Admin from "./Components/Admin/Admin";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname === "/admin";
  return (
    <div>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/search" element={<FilterPage />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/submit" element={<Submitpaper />} />
        <Route path="/addevents" element={<AddEvent />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Contact-us" element={<ContactUs />} />
        <Route path="/ScientificEvents" element={<Events />} />
        <Route path="/faq" element={<Faq />} />
        {/* <Route path="/privacypolicy" element={<PrivacyPolicy />} /> */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {!isAdminRoute && <Footer />}
      <ToastContainer />
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
