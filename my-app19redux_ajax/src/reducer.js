// 디스패치된 액션은 리듀서에서 처리되며, 상태를 변경함.(update)
import { combineReducers } from "redux";

// 값과 액션 요구 (state, action : state을 어떻게 바꿀것인지(action))
const employeeReducer = (state=[], action) => {
    switch(action.type) {
        case "SET_EMPLOYEES":
            return action.payload;
            // dispatch(setEmployees([{"jikwonno:1, jikwonname:"홍길동"},...]));
        default:
            return state;
    }
};

const customerReducer = (state=[], action) => {
    switch(action.type) {
        case "SET_CUSTOMERS":
            return action.payload;
        default:
            return state;
    }
};

// 여러 리듀서를 결합하고 리덕스 스토어에서 사용할 수 있도록 함.
export default combineReducers({ 
    employees:employeeReducer, 
    customers:customerReducer 
}) 

