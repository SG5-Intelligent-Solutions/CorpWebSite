import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components

import { Home, Service } from "./pages/Home";



// Create root and wrap with Router for routing functionality
createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Define routes for Home and Service components */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
      </Routes>
    </Router>
  </StrictMode>
);
