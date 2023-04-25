import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Product from './pages/Product';
import Home from './pages/Home';
import Contact from './pages/Contact';


function App() {
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  return (
    <>
      <div className="bg-gray-100">
        <BrowserRouter>



          <Navbar />
          <div className="my-3">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path="/contact" element={<Contact/>} />
              <Route path="/Product" element={<Product />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        
        
          <Footer />
        </BrowserRouter>




      </div>
    </>
  );
}

export default App;
