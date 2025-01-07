import React, { useState } from "react";
import AddNumber from "./AddNumber";
import { useDispatch } from "react-redux"; // 리덕스 지원

 // const AddNumberSuper = (props) => {
const AddNumberSuper = () => {
    const dispatch = useDispatch(); // 컴포넌트 내에서 디스패치 사용할 수 있도록 함.
    // dispatch : 액션(action)을 리듀서(reducer)에 전달하여 상태(state)를 변경하는 데 사용

    // type : Redux(reducer)에서 실행할 작업의 종류를 결정(문자열) 
    // payload : store의 state를 update할 데이터(값)
    const handleClick = (size) => {
        dispatch({type:"INCREASE_NUMBER", payload:size}); 
        // 리듀서의 계산 로직 호출 (reducer.js)
    }
    return (
        <div id="super">
            <h1>Add Number Super</h1>
            <AddNumber onClick={handleClick}/>
        </div>
    );
};

export default AddNumberSuper;