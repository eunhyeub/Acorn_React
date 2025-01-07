import React, { useState } from 'react';

const Jikwon = () => {
    // 상태 관리
    const [busername, setBusername] = useState(''); // 부서명
    const [jikwons, setJikwons] = useState([]); // 직원 목록
    const [error, setError] = useState(''); // 오류 메시지
    

    // 부서명 입력 변경 처리
    const handleBusernameChange = (event) => {
        setBusername(event.target.value);
    };

    // 검색 버튼 클릭 시
    const handleSearch = () => {
        if (!busername) {
            alert('부서명을 입력해주세요.');
            return;
        }

        // API 요청
        fetch(`/api/jikwons/by-buser?busername=${encodeURIComponent(busername)}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('직원 정보를 가져오는 데 실패했습니다.');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Received data:', data); // 응답 데이터 확인
                setJikwons(data); // 직원 목록 업데이트
                setError(''); // 오류 초기화
            })
            .catch((error) => {
                console.error('Error:', error); // 오류 로그 추가
                setError(error.message); // 오류 메시지 설정
                setJikwons([]); // 직원 목록 초기화
            });
    };

    const getAverageSalary = () => {
        if (jikwons.length === 0) return 0;
        const totalSalary = jikwons.reduce((acc, jikwon) => acc + jikwon.jikwonpay, 0);
        return totalSalary / jikwons.length;
    };

    return (
        <div>
            <h3>부서별 직원 정보</h3>

            {/* 부서명 입력 */}
            <div>
                <label htmlFor="busername">부서명: </label>
                <input
                    type="text"
                    id="busername"
                    value={busername}
                    onChange={handleBusernameChange}
                    placeholder="부서명을 입력하세요"
                />
                <button onClick={handleSearch}>확인</button>
            </div>

            {/* 오류 메시지 출력 */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* 직원 목록 출력 */}
            {jikwons.length > 0 && (
                <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>사번</th>
                            <th>이름</th>
                            <th>부서명</th>
                            <th>직급</th>
                            <th>연봉</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jikwons.map((jikwon, index) => (
                            <tr key={index}>
                                <td>{jikwon.jikwonno}</td>
                                <td>{jikwon.jikwonname}</td>
                                <td>{jikwon.busername}</td>
                                <td>{jikwon.jikwonjik}</td>
                                <td>{jikwon.jikwonpay}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                        <p>인원 수: {jikwons.length}명</p>
                        <p>연봉 평균: {getAverageSalary().toLocaleString()} 원</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Jikwon;
