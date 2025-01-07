import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
    const [state, setState] = useState({});

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const navigate = useNavigate();

    return(
        <>
            <h4>운동을 기록하세요</h4>
            사용자명 : <input type="text" onChange={(e) => {setState(e.target.value)}}/><br/>
            체중 : <input type="number" onChange={(e) => {setState(e.target.value)}}/> kg <br/><br/>
            <button onClick={() => { // route 위해 /edit 추가
                        navigate(`/exe`)}}>운동 기록 정보 보기</button>
        </>
    )
}