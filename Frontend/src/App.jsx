// import { useState } from "react";
// import Footer from "./Components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEvent from "./Components/Pages/AddEvent/AddEvent";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Footer />} /> */}

        <Route path="add-event" element={<AddEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
