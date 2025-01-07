import React, {useState} from "react";
import Child from './Child';

function App() {
  const [fatherAge, setFatherAge] = useState(34);
  const [childAge, setChildAge] = useState(3);

  // 아빠 나이 변경 이벤트 핸들러
  const changeFatherAge = () => {
    setFatherAge(fatherAge +1);
  }

  const changeChildAge = () => {
    setChildAge(childAge + 1);
  }

  // rerandering 됐음.
  console.log("아빠 나이가 변경됨(리랜더링)");


  const boxStyle = {border:"1px solid", padding:"10px"}
  return (
    <div style={boxStyle}>
      <h2>🐯아빠(신기해님)</h2>
      <span>나이 : {fatherAge}</span>&nbsp;
      <button onClick={changeFatherAge}>아빠 나이 변경하기 (+1)</button>
      <hr/>
      <Child irum={"신통해"} nai={childAge} />
      <button onClick={changeChildAge}>자녀 나이 변경</button>
    </div>
  );
}

export default App;
