// action을 정의하는 파일을 별도 작성
// 액션 객체를 생성하는 액션 생성 함수를 정의 , 리듀서 함수들을 저장


// jikwon data를 처리하는 액션 객체 생성
// dispatch(setEmployees([{"jikwonno:1, jikwonname:"홍길동"},...]));
export const setEmployees = (employees) => ({
    // props.dispatch({ type: '항목추가', payload: {데이터들} });
    type:"SET_EMPLOYEES",
    payload:employees
});

// gogek data를 처리하는 액션 객체 생성
export const setCustomers = (customers) => ({
    // props.dispatch({ type: '항목추가', payload: {데이터들} });
    type:"SET_CUSTOMERS",
    payload:customers
});