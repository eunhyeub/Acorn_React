import React from "react";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import MyTest from "./mydir/Test";
import HelloAbout from "./mydir/About";
import CountFriend from "./mydir/Count";
import Input1 from "./mydir/Input1";
import Input2 from "./mydir/Input2";
import Multidata from "./mydir/Multidata";
import MyProduct from "./mydir/MyProduct";
import MyProduct2 from "./mydir/MyProduct2";

function App() {
  return (
    <Router>
    <div className="App">
        <h2>라우팅 연습</h2>
        <MyTest></MyTest>
        <hr/>
        <nav>
          <Link to="/">Test 화면</Link> |&nbsp;
          <Link to="/about">About 화면</Link> |&nbsp;
          <Link to="/count">친구 추가</Link> |&nbsp;
          <Link to="/input1">입력화면1</Link> |&nbsp;
          <Link to="/input2">입력화면2</Link> |&nbsp; <br/>
          <Link to="/mem">멤버 출력</Link> |&nbsp;
          <Link to="/kbs/product">상품정보(Ajax)</Link> |&nbsp;
          <Link to="/kbs/product2">상품정보(Ajax:Axios)</Link> |&nbsp;
        </nav>
        <Routes>
          <Route path="/" element={<MyTest/>}></Route>
          <Route path="/about" element={<HelloAbout/>} />
          <Route path="/count" element={<CountFriend/>} />
          <Route path="/input1" element={<Input1/>} />
          <Route path="/input2" element={<Input2/>} /> 
          <Route path="/mem" element={<Multidata/>} />
          <Route path="/kbs/product" element={<MyProduct/>} />
          <Route path="/kbs/product2" element={<MyProduct2/>} />
        </Routes>
    </div>
    </Router>
  ); 
  // link에서 지정한 링크에 path 연결 후 element에 적어준 컴포넌트로 이동
  // Link - Route 연결
}

export default App;
