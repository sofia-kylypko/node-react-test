import { React, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./home"; // Ensure you have Home.js
import Login from "./login";
import { useNavigate } from "react-router-dom";

function App() {
  const apiHost = "http://localhost:5001";
  const moveto = useNavigate();

  // check if logged in

  return (
    <Routes>
      <Route path="/" element={<Login />} /> {/* Show Login on "/" */}
      <Route path="/home" element={<Home />} /> {/* Show Home on "/home" */}
    </Routes>
  );
}

export default App;