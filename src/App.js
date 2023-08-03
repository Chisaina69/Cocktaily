import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CocktailList from "./components/CocktailList";
import CocktailDetail from "./components/CocktailDetail";
import About from "./components/About";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktails" element={<CocktailList />} />
        <Route path="/cocktails/:id" element={<CocktailDetail />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
