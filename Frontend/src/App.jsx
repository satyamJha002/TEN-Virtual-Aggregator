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
import { AuthProvider } from "./context/AuthContext";
import Login from "./Components/Admin/Login/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import FirstBlogPost from "./Components/Pages/Blog/Post/FirstBlogPost";
import SecondBlogPost from "./Components/Pages/Blog/Post/SecondBlogPost";
import { Categories } from "./Components/Pages/Blog/Categories/Categories";
import { EducationConferences } from "./Components/Pages/Blog/Categories/EducationConferences";
import { Conference } from "./Components/Pages/Blog/Categories/Conference";
import { AllConferenceAlert } from "./Components/Pages/Blog/Categories/AllConferenceAlert";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/search" element={<FilterPage />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/submit" element={<Submitpaper />} />
        <Route path="/addevents" element={<AddEvent />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/blog/a-comprehensive-guide-to-the-upcoming-conferences"
          element={<FirstBlogPost />}
        />
        <Route
          path="/blog/guide-to-the-top-medical-conferences"
          element={<SecondBlogPost />}
        />
        <Route
          path="/blog/categories/academic-confrence"
          element={<Categories />}
        />
        <Route
          path="/blog/categories/education-conferences"
          element={<EducationConferences />}
        />
        <Route path="/blog/categories/AllConferenceAlert"
        element={<AllConferenceAlert/>} />
        <Route path="/blog/categories/conference" element={<Conference />} />
        <Route path="/Contact-us" element={<ContactUs />} />
        <Route path="/ScientificEvents" element={<Events />} />
        <Route path="/faq" element={<Faq />} />
        {/* <Route path="/privacypolicy" element={<PrivacyPolicy />} /> */}
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
      {!isAdminRoute && <Footer />}
      <ToastContainer />
    </>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default AppWrapper;
