// function type의 컴포넌트
import { useState } from "react";

const HookTest = () => {
    /* setCount = const {count} = this.state; */
    const [count, setCount] = useState(0); // [state변수, state수정함수]
    console.log(useState(0));

    return(
        <div>
             number : {count}&nbsp;&nbsp;
             <button onClick={() => setCount(count + 1)}>증가 2</button>            
        </div>
    );
};

export default HookTest;