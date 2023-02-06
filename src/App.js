import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Updates from "./pages/Updates";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/Updates" exact element={<Updates />} />
        <Route path="/contact-us" exact element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
