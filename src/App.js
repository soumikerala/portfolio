import React from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./App.css";
 function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
      <Routes>
        
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;