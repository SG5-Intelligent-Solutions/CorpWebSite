import { Home, Service } from "./pages/Home";
import { Contact } from "./pages/Home/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;