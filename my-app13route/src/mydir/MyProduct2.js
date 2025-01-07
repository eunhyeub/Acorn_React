import React, {useState, useEffect} from "react";
import axios from "axios";

// 상품정보를 불러올 수 있는 state 선언
const MyProduct2 = () => {   
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // 컴포넌트가 mount 된 후 Ajax 요청
    // 마운트(Mount): 컴포넌트가 DOM에 삽입될 때
    useEffect(() => {
        // URL 주소 경로 삽입
        axios("/abcreact/product.jsp", {method:"GET"})
        .then((response) => {
            // 서버에서 받은 데이터로 상태 업데이트
            setItems(response.data.items);
            setIsLoaded(true); // 로딩 완료
        })
        .catch((error) => {
            setIsLoaded(true);
            setError(error);
        })}, []); // 의존성 배열 : 값이 없기 때문에 랜더링 될때마다 실행 (일회용) / 있으면 해당 값이 들어올때마다 실행
    
    if (!isLoaded) {
        return <div>로딩중 . .🕰️</div>;
    } 
    if(error) {
        return <div>Error : {error.message}</div>;
    }      
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    {item.name} {item.price}
                </li>
            ))}
        </ul>
    )
};

export default MyProduct2;