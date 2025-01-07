import { useSelector, useDispatch } from "react-redux";
// 리덕스 액션 디스패치
import { increment, decrement, reset } from "./redux/ResourceSlice";

export default function ChildA() {
    const value = useSelector((state) => state.resource.value); 
    // state는 수정 불가 -> reducer에서만 변경 가능하다.
    const dispatch = useDispatch(); 

    return(
        <div>
            <h3>ChildA</h3>
            <p>공유 값 : {value}</p>
            <button onClick={() => dispatch(increment())}>값(value) 증가</button>
            <button onClick={() => dispatch(reset())}>값 초기화</button>
        </div>
    );
}
