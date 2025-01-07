// 클래스 타입
/*
import { Component } from "react";
import HookTest from "./mydir/HookTest";
import HookTest2 from "./mydir/HookTest2";

class App extends Component {
  state = {
    count : 0,
    // 지역 변수 : state 상태 변수 - 컴포넌트 내부에서 사용(관리)하는 동적인 데이터
    // props 값이 바뀌면 가상 DOM이 re랜더링됨. 
  };
  countUpdate(n) {
    this.setState({count : n});
  }

  render() {
    const {count} = this.state;
    return (
      <div>
        <h2>지역변수 state</h2>
        number : {count}&nbsp;
        
        <button onClick={() => {
          this.countUpdate(count + 1);
        }}>증가1</button>
        <hr/>
        <HookTest />
        <hr/>
        <HookTest2 />
      </div>
    );
  }
}
*/

// 함수 타입
import { useState, useEffect } from "react";
import HookTest from "./mydir/HookTest";
import HookTest2 from "./mydir/HookTest2";

const App = () => {
  // useState import
  const [count, setCount] = useState(0);
  
  const countUpdate = (n) => {
    setCount(n);
  };

  // 값 참조
  useEffect(() => {
    let a = 1;
    console.log(a);
  }, []);

  return(
    <div>
      <h2>지역변수 state(함수 사용)</h2>
        number : {count}&nbsp;
        
        <button onClick={() => {
          countUpdate(count + 1);
        }}>증가1</button>
        <hr/>
        <HookTest />
        <hr/>
        <HookTest2 />
    </div>
  );
}

export default App;
