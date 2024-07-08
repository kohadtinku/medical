import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Loader from "./pages/Loader";
import Header from "./components/Header";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import Main_Contact from "./pages/Main_Contact";
import About from "./pages/About";
import Product from "./pages/Product";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <HashRouter>
        <ScrollToTop/>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Main_Contact />} />
          </Routes>
          <Footer />
          <Footer2/>
        </HashRouter>
      )}
    </>
  );
};

export default App;
