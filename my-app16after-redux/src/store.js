import { configureStore } from "@reduxjs/toolkit";
import { numberReducer } from "./reducer";
// 리듀서에서 numberReduceer를 가져옴

const store = configureStore({ // 리듀서 등록 ( 미들웨어의 일종 ) 
    reducer:numberReducer, 
    // 단일 리듀서를 함수로 전달한다. 다중 리듀서의 경우 reducer는 객체로 사용됨.
});

export default store;