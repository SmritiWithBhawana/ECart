import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header.js";
import LoginPage from "./components/LoginPage.js";
import Dashboard from "./components/Dashboard.js";

function App() {
  return (
    <BrowserRouter>
      <Header title="Smriti ECom Site" />
      <Routes>
        <Route>
          <Route path="/" element={<div className="App">Hi Everyone</div>} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/welcome" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
