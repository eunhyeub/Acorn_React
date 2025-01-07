import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MemberUpdateForm() {
    // /members/:num/edit
    const {num} = useParams();
    // 수정할 회원을 state로 관리
    const [state, setState] = useState({
        num:0,
        name:"",
        addr:""
    });

    // 랜더링 되자마자 읽어와야함
    // 먼저 자료 읽어오기
    useEffect(() => {
        axios.get("/members/" + num) // 서버의 controller 주소
        .then(res => {
            if(res.data.isSuccess) {
                setState(res.data)
            }
        })
        .catch(error => {
            console.log(error);
        })
    }, [num]) // num 값이 바뀔때마다 callback 실행

    const handleChange = (e) => {
        setState({
            ...state, // 입력된 값 하나하나 수정 가능한 전개연산자
            [e.target.name]:e.target.value // name 값에 value값으로 바꾸기 => state 값 바꿈

        })
    }

    // 수정하기
    const navigate = useNavigate();
    const handleUpdate = () => {
        axios.put("/members/" + num, state) // 서버의 controller 주소 
        // state는 handleChange에서 변경된 값
        .then(res => {
            if(res.data.isSuccess) {
                alert("수정 성공");
                navigate("/members"); // 수정 후 목록보기 (App.js의 /members <Member/>)
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <>
            <h2>👥회원 정보 수정하기</h2> 
            이름 : <input type="text" name="name" onChange={handleChange} value={state.name}/><br/>
            주소 : <input type="text" name="addr" onChange={handleChange} value={state.addr}/><br/>   
            <button onClick={handleUpdate}>수정</button>
        </>
    );
}