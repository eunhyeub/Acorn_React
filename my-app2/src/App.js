import MyName from "./mydir/MyName";
import MyNickName from "./mydir/MyName2";

/* 기존 방법 */
function App() {
  return (
    <div className="App">
      <h2>props 연습</h2>
      <MyName></MyName>
      <MyName name="한가해"></MyName>
      <MyName name="한가해" addr="강남구 역삼동 123"></MyName>
      <hr/>
      <MyNickName></MyNickName>
      <MyNickName name="으네" addr="서울시 광진구"></MyNickName>
    </div>
  );
}


/* 다른 방법으로 사용하기 (위에 방법이 더 많이 쓰임) 
import { Component } from "react";

class App extends Component {
  render() {
    return(
      <div className="App">
      <h2>props 연습</h2>
    </div>
    );
  }
}
  */
export default App;
