// 리덕스의 리듀서 함수 : Action에 따라 변경하는 순수 함수로
// 현재 state와 action을 받아 새로운 상태로 변환

const initialState = {number:0};
// 현재 상태(state)와 액션 객체(action)을 받아 새로운 상태를 반환
export const numberReducer = (state = initialState, action) => {
    switch(action.type) {
        case "INCREASE_NUMBER" : 
            return {...state, number:state.number + action.payload}; 
            // number값에 payload(1추가)
        default:
            return state; // 정의된 case가 없는 경우, 현재 상태 그대로 반환 (필수적인 부분)
    }
};