import { Component } from "react";

class MyName extends Component {
    /* 초기값 설정 
    static defaultProps = {
        name:"신기해"
    } */
    render() {
        return(
            <div>
                안녕! 나는 <b>{this.props.name}</b> &nbsp;&nbsp;
                사는 곳은 <b>{this.props.addr}</b>
            </div>
        );
    }
}

/* 초기값 따로 설정하기 */
MyName.defaultProps = {
    name:"신기한"
}

export default MyName;