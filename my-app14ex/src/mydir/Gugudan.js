import React, { useState } from "react";

const Gugudan = () => {
    const [dan, setDan] = useState(2);
    const [gugudan, setGugudan] = useState([]);

    const handleChange = (e) => {
        setDan(Number(e.target.value)); // 입력값을 숫자로 변환해 저장
    };

    const guguFunc = (e) => {
        const result = Array.from({ length: 9 }, (_, i) => dan * (i + 1));
        setGugudan(result); // 결과를 상태에 저장
    }

    return (
        <div>
            <div>
                단 입력 :
                <input type="number" value={dan} id="gugudan" onChange={handleChange} />       
                <button onClick={guguFunc}>확인</button>
                <br/>
                <div>
                {gugudan.length > 0 && (
                    <ul>
                        {gugudan.map((value, index) => (
                            <li key={index}>
                                {dan} x {index + 1} = {value}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            </div>
        </div>
    );
}

export default Gugudan;