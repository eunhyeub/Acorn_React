/* eslint-disable */
import './App.css';
import React, {useState} from 'react';


function App() {
  const irum = "은혜의 JSX 사용법";
  let title = "이건 title"; // js 함수의 지역변수(일반, state 아님)
  
  const [jemok, setJemokFunc] = useState("자바스크립트"); // 문자, 숫자, 배열, 객체, ...
  const [jemok2, setJemokFunc2] = useState(["리액트", "자바"]);
  
  // 이벤트 처리용 함수(내부 함수)
  function dataUpdate() {
    // alert("a");
    title = "타이틀을 바꾸자"; // 가상DOM이 리랜더링 되지 않음.
    setJemokFunc('오라클')
  }

  function dataUpdate2() {
    let newArr = [...jemok2]; // 전개 연산자
    console.log(newArr);
    newArr[1] = "백엔드 프로그램의 왕";
    setJemokFunc2(newArr); // rerandering
  }

  // 이벤트 처리 계속
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className='redbar'>
        <h2>리액트의 이해</h2>
      </div>
      <div className='list'>
        <h3>이름은 {irum}</h3>
        <p>state 변수 확인</p>
        <span><b>일반변수 : {title}</b></span><br/>
        <span><i>state변수 : {jemok}</i></span>&nbsp;
        <button onClick={dataUpdate}>title, jemok 변경</button>
        <hr/>
        <div>{jemok2[0]}</div>
        <div>{jemok2[1]}</div>
        <button onClick={dataUpdate2}>jemok2 변경</button>
        <br/>
        그림 클릭 : <span onClick={() => {setCount(count + 1)}}>😎</span>&nbsp;
        {count}
      </div>
    </div>
  );
}

export default App;
