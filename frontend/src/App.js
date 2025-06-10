import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BiologyTeacherLanding from "./components/BiologyTeacherLanding";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BiologyTeacherLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;