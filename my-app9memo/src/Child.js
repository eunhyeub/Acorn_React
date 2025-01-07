import React, {memo} from "react";

const boxStyle = {border:"1px dotted blue", padding:"10px"}

const Child = ({irum, nai}) => {
    console.log("와우~ 자녀 나이 변경되었습니다.(리랜더링)")
    return (
        <div style={boxStyle}>
            <h3>🐱자녀 1</h3>
            <p>이름: 신동</p>
            <p>나이 : 8살</p>
            <h3>🐱자녀 2</h3>
            <p>이름: {irum}</p>
            <p>나이 : {nai}살</p>
        </div>
    );
}

// export default Child;
export default memo(Child);