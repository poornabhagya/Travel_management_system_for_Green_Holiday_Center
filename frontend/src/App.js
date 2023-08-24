import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from "./Components/Register";
import Login from "./Components/Login";
import GuiHome from "./Components/GuiHome";
import Profile from "./Components/Profile";
import Home from "./Components/Home";





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/GuiHome" element={<GuiHome />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Home" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
