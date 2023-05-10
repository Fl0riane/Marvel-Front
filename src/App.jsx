import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Cookies from "js-cookie";

/*-----------Components-------------*/
import Header from "./components/Header.jsx";

/*-----------Pages-------------*/
import Character from "./pages/Character";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/character" element={<Character />} />
          <Route path="/comics" element={<Comics />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
