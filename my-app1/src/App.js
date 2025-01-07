
import { Component } from 'react';
import Navdata from "./mydir/Navdata.js";


// 클래스 컴포넌트(유닛화) :  
class Subject extends Component {
  render() {
    return(
      <header>
        <h1>머리글 : 웹 문서</h1>
      </header>
    );
  }
}
/* 자식 컴포넌트 */
function Welcome(props) { // js
  let kbs = "공영방송"; // js
  return ( // jsx
    <article>
      {props.who} 기사 내용 <br/>
      {kbs}
    </article>
  );
}

/* 부모 컴포넌트 */
function App() {
  return (
    <div className="App"> {/* JSX 주석 */}
      연습용
      <Subject></Subject> {/* 컴포넌트 호출 */}
      <Subject></Subject>
      <hr/>
      <Welcome who="나길동"></Welcome>
      <br/>
      <Navdata msg="부모 정보 전달" msg2="전달2"></Navdata>
    </div>
  );
}

export default App;
