import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MemberInsertForm() {
    const navigate = useNavigate();
    const [state, setState] = useState({}); // num, name, addr
    
    const handleChange = (e) => {
        setState({
            ...state, // 입력된 값 하나하나 수정 가능한 전개연산자
            [e.target.name]:e.target.value // name 값에 value값으로 바꾸기 => state 값 바꿈

        })
    }

    const handleSave = () => {
        axios.post("/members", state) // 서버의 controller 주소
        .then(res => {
            if(res.data.isSuccess) {
                alert("등록 성공");
                navigate("/members"); // 추가 후 목록보기 (App.js의 /members <Member/>)
            }
        })
        .catch(error => {
            console.log(error);
        })
    }


    return (
        <>
            <h2>👥새 회원 등록하기</h2> 
            번호 : <input type="text" name="num" onChange={handleChange} placeholder="번호"/><br/>
            이름 : <input type="text" name="name" onChange={handleChange} placeholder="이름"/><br/>
            주소 : <input type="text" name="addr" onChange={handleChange} placeholder="주소"/><br/>   
            <button onClick={handleSave}>등록</button>   
        </>
    );
}