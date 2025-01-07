import React from "react";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Main from "./mydir/Main.js";
import Gugudan from "./mydir/Gugudan.js";
import Jikwon from "./mydir/Jikwon.js";

function App() {
  return (
    <Router>
    <div className="App">
      <h2>DB / SpringBoot / JPA</h2>
      <nav>
        <Link to="/"><h3>메인</h3></Link>
        <Link to="/gugudan"><h3>구구단</h3></Link>
        <Link to="/jikwon"><h3>직원자료</h3></Link>
      </nav>
      <hr/>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/gugudan" element={<Gugudan />}/>
        <Route path="/jikwon" element={<Jikwon />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
