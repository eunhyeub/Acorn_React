/* eslint-disable */
import './App.css';
import { useState } from 'react';
import MyCom from './mydir/Component1'

function App() {

  const [meter, setMeter] = useState(0);
  let input = 0;

  function dataCalc() {
    let input = documnet.getElementById("input").value;
    setMeter("input")
  }

  return (
    <div className="App">
      <h2>📐길이 환산📏</h2>
      <input type="text" id="input"></input>
      <MyCom></MyCom>
      <button onClick={dataCalc}>계산</button>
      미터 : {meter} , 센티미터 : {meter * 100} 
    </div>
  );
}

export default App;
