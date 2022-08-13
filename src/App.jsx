import "./css/desktop.css";
import "./css/plan.css";
import "./css/phone.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Error from "./pages/404";

function App() {
  // const api = "http://localhost:8000";
  const api = "https://evilenemy-backend.herokuapp.com";
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home api={api} />} />
        <Route path="/about" element={<About api={api} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact api={api} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer api={api} />
    </Router>
  );
}

export default App;
