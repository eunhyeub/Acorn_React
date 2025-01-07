import React, {useState} from "react";

const Input2 = () => {
    const [params, setParams] = useState({
        irum:"",
        nai:"",
        juso:""
    });

    const {irum, juso, nai} = params;

    const changeFunc = (e) => {
        // 이벤트 트리거된 입력 필드 값을 id 와 value에 치환
        const id = e.target.id;
        const value = e.target.value;

        // 깊은 복사: 객체가 2개 만들어짐 (가상의 객체 만들음) => 정리해놓기
        setParams({
            ...params, // 깊은 복사 (javascript에서 사용됨. 구조분해할당:destructuring assignment)
            [id]:value
        })
    };

    return(
        <div>
            <br/>
            <div>
                이름 : 
                <input type="text" value={irum} id="irum" onChange={changeFunc}/>
            </div>
            <div>
                나이 : 
                <input type="text" value={nai} id="nai" onChange={changeFunc}/>
            </div>
            <div>
                주소 : 
                <input type="text" value={juso} id="juso" onChange={changeFunc}/>
            </div>
            <br/>
            <table>
                <tr>
                   <td>이름 : {irum}</td>
                   <td>나이 : {nai}</td>
                   <td>주소 : {juso}</td>
                </tr>
            </table>
        </div>
    );
};

export default Input2;