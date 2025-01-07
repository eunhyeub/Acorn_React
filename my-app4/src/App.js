import './App.css';
import { useState } from 'react';
import MyComp1 from './mydir/Component1';
import MyComp2 from './mydir/Component2';

const App = () => {
  const [subject] = useState({title:'웹문서', subtitle:'오늘은 금요일'});
  const [friends] = useState([
    {bun:1, irum:'으네', nai:24},
    {bun:2, irum:'해피', nai:28}
  ]);

  const handleChangeData = () => {
    friends.forEach(friend => {
      console.log(`${friend.bun}번 ${friend.irum} : 나이는 ${friend.nai}세`);
    })
  }

  return (
    <div className="App">
      <h2>이벤트 연습</h2>
        <MyComp1 title={subject.title} subtitle={subject.subtitle} 
        changeData = {handleChangeData} />
        <br/>
        <MyComp2 title={subject.title} subtitle={subject.subtitle} 
        friends={friends}
        changeData = {handleChangeData} />
    </div>
  );
}

export default App;
