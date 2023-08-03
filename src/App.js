import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CocktailList from "./components/CocktailList";
import CocktailDetail from "./components/CocktailDetail";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktails" element={<CocktailList />} />
        <Route path="/cocktails/:id" element={<CocktailDetail />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
