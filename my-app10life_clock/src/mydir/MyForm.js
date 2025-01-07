import { useEffect, useState } from "react";

function MyForm() {
    const [formData, setFormData] = useState({
        irum: "",
        nai:"",
        menu:"아이스티"
    });

    const dataChange = (e) => {
        const name = e.target.name; // form tag 내의 name 속성 저장
        const value = e.target.value; // target은 3개임 (이름, 나이, 음료)
        // console.log({[name]:value});
        // console.log({...formData});
        setFormData({
            ...formData, // formData 상태 갱신. 기존 객체를 복사한 후, 특정 필드만 갱신.
            [name]:value // 기존 상태를 유지하며 필요한 부분만 덮어쓰기
        });
    };

    const dataSubmit = (e) => {
        e.preventDefault();

        // 입력자료 오류 검사 : destruct
        const {nai} = formData; // nai 값 체크
        // NaN : Not a Number
        if(!Number(nai) || isNaN(Number(nai))) {
            alert("나이는 숫자로 입력하세요.");
        }
    }

    // life cycle 관련
    useEffect(() => {
        // componentDidMount
        console.log("MyForm 컴포넌트가 마운트됨");
        // componentWillUnmount
        return () => {
            console.log("MyForm 컴포넌트가 언마운트됨");
        };
    }, []);

    // componentDidUpdate
    useEffect(() => {
        console.log("MyForm 컴포넌트가 갱신될 때 마다 업데이트됨");
    }, [formData]);

    return (
        <>
        <h3>안녕하세요 {formData.irum}님, {formData.nai}세 입니다. 선택한 음료는 {formData.menu} </h3>
        <form onSubmit={dataSubmit}>
            이름 입력 : <input type="text" name="irum" onChange={dataChange} /><br/>
            나이 입력 : <input type="text" name="nai" onChange={dataChange} /><br/>
            음료 선택 : 
            <select name="menu" value={formData.menu} onChange={dataChange}>
                <option value={"아이스 아메리카노"}>아이스 아메리카노</option>
                <option value={"아이스 라떼"}>아이스 라떼</option>
                <option value={"아이스티"}>아이스티</option>
            </select>
            <br/><br/>
            <button type="submit">전송</button>
        </form>
        </>
    );
}

export default MyForm;