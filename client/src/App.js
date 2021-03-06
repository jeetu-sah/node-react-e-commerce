import React from "react";
import "./App.css";
import { Routes, Route, Redirect } from "react-router-dom";
import About from "./components/front/About";
import Contact from "./components/front/Contact";
import Home from "./components/front/Home";
import Login from "./components/admin/Login";
import Register from "./components/admin/Register";
import Dashboard from "./components/admin/Dashboard";
import Admin from "./components/admin/Admin";

import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS


window.carName = "Volvo";


class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/admin/*" element={<Admin />} />
        </Routes>
      </>
    );
  }
}



export default App;
