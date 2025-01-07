import { useState, useEffect } from "react";

const Clock3 = () => {
    const [date, setDate] = useState(new Date());

    // life cycle 관련 hook 중 : useEffect 
    // componentDidMount + componentDidUpdate + componentWillUnmount
    useEffect(() => {
       const timerId = setInterval(() => showSigan(), 1000);

       // componentWillUnmount에 해당하는 클린업 함수를 반환
        return () => {
            clearInterval(timerId);
        }
    }, []); 
    // 의존성 배열: 한번만 수행된다. [값] 값에 있는 값이 변할때마다 수행된다.
    // useEffect(() => {}, [의존성1, 의존성2, ..]); 
    // 조건부 effect 발생, 의존성 중 하나가 변경된다면 effect는 항상 재생성됩니다.

    const showSigan = () => {
        setDate(new Date());
    }

    return (
        <div>
            <h1>좋은 하루~</h1>
            <h2>지금은 {new Date().toLocaleTimeString()}</h2> {/* 정적 */}
            <h2>현재 시간은 {date.toLocaleTimeString()}</h2> {/* state 사용해서 렌더링(동적) */}
        </div>
    );
}

export default Clock3;