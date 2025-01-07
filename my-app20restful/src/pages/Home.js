import { Link } from "react-router-dom";

export default function Home() {
    return(
        <>
            <h1>메인 페이지(Home)</h1>
            <h2>정보 확인용 페이지</h2>
            <ul>
                <li>
                    <Link to="/members">회원 목록</Link>
                </li>
            </ul>
        </>
    )
}