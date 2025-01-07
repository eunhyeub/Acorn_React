import React, {useState, useEffect} from "react";

// 상품정보를 불러올 수 있는 state 선언
const MyProduct = () => {   
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // 컴포넌트가 mount 된 후 Ajax 요청
    // 마운트(Mount): 컴포넌트가 DOM에 삽입될 때
    useEffect(() => {
        // URL 주소 경로 삽입
        fetch("/abcreact/product.jsp", {method:"GET"})
        .then(res => {
            if(!res.ok) { // 실패 시
                throw new Error('네트워크 오류');
            }
            return res.json();
        })
        .then((result) => {
            setIsLoaded(true);
            setItems(result.items);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        })
    }, []); // 의존성 배열 : 값이 없기 때문에 랜더링 될때마다 실행 (일회용) / 있으면 해당 값이 들어올때마다 실행
    if (error) {
        return <div>Error : {error.message}</div>;
    } else if(!isLoaded) {
        return <div>로딩중 . . .</div>;
    } else {
        return (
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} {item.price}
                    </li>
                ))}
            </ul>
        );
    }
};

export default MyProduct;