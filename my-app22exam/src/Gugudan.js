import { useState } from "react";

const Gugudan = () => {
    const [dan, setDan] = useState(3);
    const [gugudan, setResult] = useState([]);

    const handleChange = (e) => {
        setDan(Number(e.target.value));
    };

    const guguFunc = (e) => {
        const result = Array.from({ length: 9 }, (_, i) => dan * (i + 1));
        setResult(result);
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