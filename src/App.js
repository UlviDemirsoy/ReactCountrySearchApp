import React, {useState} from "react"
import './App.css';
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">

      
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
