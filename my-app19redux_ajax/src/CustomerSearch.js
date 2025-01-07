import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEmployees, setCustomers } from "./action";
import axios from "axios";

const CustomerSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // 리듀서의 customerReducer에서 관리되는 state 조회
    const customers = useSelector((state) => state.customers);

    const dispatch = useDispatch();

    const handleSearch = async() => {
        const response = await axios.get("/findgogek.jsp", {
            params:{phone:searchTerm},
        });

        // 웹 서버로부터 요청된 결과를 받아 Redux 상태에 저장
        dispatch(setCustomers(response.data));
    };

    return (
        <div>
            <h2>고객 전화번호로 검색</h2>
            <input type="text" value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} placeholder="고객 전화번호를 입력하세요."/>
            <button onClick={handleSearch}>검색 결과 확인하기</button>
            <ul>
                {customers.map((custo) => (
                    <li key={custo.gogekno}>
                        {custo.gogekname}님의 전화번호는 {custo.gogektel}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CustomerSearch;
