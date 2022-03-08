import React from "react";
import "./App.css";
import {Routes, Route } from "react-router-dom";
import About from "./components/front/About";
import Contact from "./components/front/Contact";
import Home from "./components/front/Home";
import Login from "./components/admin/Login";

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />

          
        </Routes>
      </>
    );
  }
}

export default App;
