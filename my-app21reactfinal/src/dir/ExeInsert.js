import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ExeInsert() {
    const navigate = useNavigate();
    const [state, setState] = useState({});

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const handleSave = () => {
        axios.post("/exe", state)
        .then(res => {
            if(res.data.isSuccess) {
                navigate("/exe")
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    return(
        <>
            <h2>운동 등록하기</h2>
            번호: <input type="text" name="id" onChange={handleChange} placeholder="번호" /><br/>
            운동명: <input type="text" name="name" onChange={handleChange} placeholder="운동명을 입력하세요." /><br/>
            운동 소요시간: <input type="text" name="duration" onChange={handleChange} placeholder="운동 시간을 입력하세요." /><br/>
            소모 칼로리: <input type="text" name="calorieburn" onChange={handleChange} placeholder="소모한 칼로리를 입력하세요." /><br/>
            <button onClick={handleSave}>등록</button>
        </>
    );
}