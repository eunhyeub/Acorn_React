import React from "react";

const MemberComp = ({memberData}) => {
    return(
        <tr>
            <td>{memberData.irum}</td>
            <td>{memberData.junhwa}</td>
        </tr>
    );
};

const Multidata = () => { // Main
    const members = [
        {irum:"으네", junhwa: "111-1111"},
        {irum:"관우", junhwa: "222-2222"},
        {irum:"장비", junhwa: "333-3333"},
    ];

    return (
        <table border={1} bgcolor="beige">
            <thead>
                <tr>
                    <td>이름</td><td>전화</td>
                </tr>
            </thead>
            <tbody>       
                {members.map((mem, index) => ( // mem에는 이름과 전화 정보가 담겨져 있음.
                    <MemberComp key={index} memberData={mem}/>
                ))}
            </tbody>
        </table>
    );
}

export default Multidata;