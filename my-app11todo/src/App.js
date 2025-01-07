import React, {useState, useCallback} from "react";
import TodoListTemplate from "./mydir/TodoTemplate";
import Form from "./mydir/Form";
import TodoItemList from "./mydir/TodoItemList";

function App() {
  const [input, setInput] = useState(""); // 입력값
  const [todos, setTodos] = useState([
    {id:0, text:"학원등원(09:20)", checked:true},
    {id:1, text:"수업듣기(09:30)", checked:false},
    {id:2, text:"집에가기(06:20)", checked:false}
  ]); 
  const [nextId, setNextId] = useState(3); // 다음번 id 값

  // ** 중요!! useCallback: hook의 일종. Memoization 구사.
  // 메모이제이션은 함수의 결과를 캐싱(caching)하여 동일한 입력에 대해 반복적으로 계산하는 것을 방지하는 최적화 기법
  // []: 의존성 배열 값이 변경되지 않으면 동일함수 인스턴스를 반환. 즉, 불필요한 함수 재생성을 방지
  // 할일을 입력하면 메모이제이션 재활용하게됨.
  const handleChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  // 새로운 todo 항목을 생성하고, 상태를 업데이트 하기 위한 함수. Memoization을 사용
  const handleCreate = useCallback(() => {
    if(input.trim() === "") return;

    // push는 기존 배열에 값을 추가하여 원본을 바꾼다.
    // concat은 기존 배열을 토대로 변경한 새로운 배열이 리턴된다. 기존의 배열은 바뀌지 않는다.
    setTodos((prevTodos) => 
      prevTodos.concat({
        id:nextId,
        text:input,
        checked:false
      })
    );
    setInput("");
    setNextId((prevId) => prevId + 1); 
  }, [input, nextId]); // input, nextId가 변경되면 handleCreate 재생성
  // 새로운 값이 바뀌거나 입력되었을 때, 의존성 주입

  // handleCreate() 변경될때마다 handleKeyDown이 생성됨.
  const handleKeyDown = useCallback((e) => {
    if(e.key === "Enter") {
      handleCreate();
    }
  }, [handleCreate]);
  
  // [toggle] 할일(todo) 목록의 특정 항목의 완료 상태를 토글하는 함수
  // 사용자가 할일 목록에서 항목을 클릭하면 해당 항목의 상태가 변경
  const handleToggle = useCallback((id) => {
    setTodos((prevTodos) => 
    prevTodos.map((todo) => 
      todo.id === id ? {...todo, checked:!todo.checked} : todo // checked 속성만 변경
    ))
  }, []);
  // todos 배열을 반복(순회) todo 객체를 검사 , id가 일치하는지 확인 : 일치하면 checked 값 반전 다르면 유지.

  // 할일 목록의 특정 항목 삭제
  // 삭제하려는 id가 일치하지 않는 항목들만 꺼내서 배열을 만든다.
  // todo는 filter의 역할
  const handelRemove = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }, []);

  return (
    /* TodoListTemplate : 전체 틀 역할 */
    <TodoListTemplate
      form={
        <Form value={input}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        onCreate={handleCreate}
        />
      }>

        <TodoItemList 
          todos={todos}
          onToggle={handleToggle}
          onRemove={handelRemove}
        />
      
    </TodoListTemplate>
  );
}

export default App;
