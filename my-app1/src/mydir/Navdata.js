import React, {Component} from "react";

class Navdata extends Component {
    render() {
        return (
            /* 반드시 root element(<ul>) 사용해야함. */
            <ul>
                <li><a href="https://www.naver.com">네이버</a></li>
                <li><a href="https://www.daum.net">다음</a></li>
                <li><a href="../abc.html">abc 문서</a></li>
                <strong>{this.props.msg}</strong><br/>
                <i>{this.props.msg2}</i>
            </ul>
        );
    }
}
export default Navdata;
/* 다른곳에서 쓸 수 있게 선언 */