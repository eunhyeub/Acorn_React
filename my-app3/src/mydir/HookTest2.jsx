import { useState } from "react";
import "../App.css"
import pic1 from "../images1.jpg";


export default function HookTest2 () {
    const [item, setItem] = useState(0); // item의 초기값 0
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => {setItem(item - 1)};

    // 키:값 형식으로 적음
    const mystyle = {color:'blue', textAlign:'center', fontSize:'30pt'};

    return(
        <div className="App">
            <div>
            number : {item}&nbsp;
            <button onClick={incrementItem}>증가</button>&nbsp;
            <button onClick={decrementItem}>감소</button>
            </div>
            {/* CSS style 적용 연습 : style 속성 값은 {} 안에 적음 */}
            <h2 className="blackBar">리액트에서 스타일 적용1</h2>
            <h2 style={mystyle}>리액트에서 스타일 적용2</h2>
            <h2 style={{color:"red", textAlign:'right'}}>리액트에서 스타일 적용3</h2>
            <hr/>
            {/* image 적용 연습 */}
            <div>
                <h3>이미지 읽기</h3>
                <img src={pic1} alt="이미지 읽기" />
            </div>
            <div className="image_bg"></div>
            <div>
                <img style={{width:"200px"}}src={`${process.env.PUBLIC_URL}/images/메모핑.png`} alt="public 이미지 읽기" />
            </div>
        </div>
    );
}

// export default HookTest2;