import React from "react";
import Home from "./dir/Home";
import Exe from "./dir/Exe";
import ExeInsert from "./dir/ExeInsert";
import ExeCalUpdate from "./dir/ExeCalUpdate";
import { Link, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <h1>👟운동 기록하기</h1>
        <nav>
          <Link to="/">메인</Link> |&nbsp;
          <Link to="/exe">전체자료 출력</Link> |&nbsp;
          <Link to="/exe/insert">운동정보 등록</Link> |&nbsp;
          <Link to="/exe/:id/update">칼로리소모량 수정</Link> |&nbsp;
        </nav>
        <hr/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/exe" element={<Exe />}/>
          <Route path="/exe/insert" element={<ExeInsert />}/>
          <Route path="/exe/:id/update" element={<ExeCalUpdate />}/>
        </Routes>
      </div>
  );
}

export default App;
