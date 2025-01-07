// reducer 파일
import { createSlice } from "@reduxjs/toolkit";

// 리듀서와 액션을 생성, 초기 상태 정의, 함수 관리, 불변성 관리
const ResourceSlice = createSlice({
    name:"resource", // prefix (resource. 어쩌구~)
    initialState:{ // state 초기값 설정
        value:0, // 공유 자원 + 다른 값도 넣어줄 수 있음 (kor, eng,...)
        kbs:50,
    },
    reducers: { // 함수를 정의하기 위한 집단 ( 리듀서 ), 
        // 각 함수는 state, action을 인수로 받는다.
        increment:(state) => {
            state.value += 1;
        }, 
        decrement:(state) => {
            state.value -= 1;
        },
        reset:(state) => {
            state.value = 0;
        }, // ...
    }, // ...
})

// action의 타입이 3가지 리듀서는 1개
// action, reducer 내보내기
export const {increment, decrement, reset} = ResourceSlice.actions;
export default ResourceSlice.reducer;