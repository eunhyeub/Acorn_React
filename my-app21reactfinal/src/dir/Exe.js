import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Exe() {
    const [exes, setExes] = useState([]);
    const [checkedItems, setCheckedItems] = useState([]);

    // 목록보기
    const refresh = () => {
        // 전체자료 리턴하는 refresh 함수 불러오기
        axios.get("/exe")
        .then(res => {
            setExes(res.data);
        })
        .catch(error => {
            console.log(error);
        })
    };

    useEffect(() => {
        refresh()
    }, []);

    // 삭제 이벤트 핸들러
    const handleDelete = (id) => {
        axios.delete("/exe/" + id)
        .then(res => {
            refresh();
        })
        .catch(error => {
            console.log(error);
        })
    }

    const onChangeCheckBox = (e, item) => {
        const isChecked = e.target.checked;
        setCheckedItems((prevCheckedItems) => {
            if(isChecked) {
                return [...prevCheckedItems, item.id];
            } else {
                return prevCheckedItems.filter((id) => id !== item.id);
            }
        });
    };

    const navigate = useNavigate();

    return(
        <>
            <h3>운동 리스트</h3>
            <table border={1}>
                <thead>
                    <tr>
                        <th>번호</th><th>운동명</th><th>소요시간</th><th>칼로리소모량</th><th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {exes.map(item => 
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.duration}</td>
                            <td>{item.calorieburn}</td>
                            <td>
                                <button onClick={() => {
                                    handleDelete(item.id)
                                }}>삭제</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );

}