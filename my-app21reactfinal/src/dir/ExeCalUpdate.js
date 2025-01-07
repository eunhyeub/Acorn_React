import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ExeCalUpdate() {
    // /exe/:id/update
    const {id} = useParams();

    // 수정할 운동을 state로 관리
    const [state, setState] = useState({
        id:0,
        name:"",
        duration:0,
        calorieburn:0
    })

    // 자료 읽어오기
    useEffect(() => {
        axios.get("/exe/" + id)
        .then(res => {
            if(res.data.isSuccess) {
                setState(res.data)
            }
        })
        .catch(error => {
            console.log(error);
        })
    }, [id]) // id 값이 바뀔때마다 실행

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    // 수정
    const navigate = useNavigate();
    const handleUpdate = () => {
        axios.put("/exe/" + id, state)
        .then(res => {
            if(res.data.isSuccess) {
                navigate("/exe")
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <>
            <h2>칼로리 소모량 수정하기</h2>
            번호 : <input type="text" name="id" onChange={handleChange} value={state.id} /><br/>
            <hr/>
            운동명 : <input type="text" name="name" onChange={handleChange} value={state.name} /><br/>
            운동 시간 : <input type="text" name="duration" onChange={handleChange} value={state.duration} /><br/>
            
            <button onClick={handleUpdate}>수정자료 읽기</button>
        </>
    );
}