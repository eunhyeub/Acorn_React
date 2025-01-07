import React, { Component } from "react";

// mount(DOM이 생성되고 결과가 출력되는 것을 의미)
// 마운트 호출 순서
// constructor -> getDerivedStateFromProps -> render -> componentDidMount
class Clock2 extends React.Component {
    // 생성자 메소드
    constructor(props) {
        super(props);
        this.state = {date:new Date()};
    } 

    // 출력되면 자동으로 호출됨
    componentDidMount() { // life cycle 관련 callback method
        // setInterval(함수, 지연될 시간)
        // 1초에 한번씩 showSigan 호출
        this.timerId = setInterval(
            () => this.showSigan(), 1000
        );

    }

    // 컴포넌트가 화면에서 사라지기 바로 직전에 자동 호출
    // 주로 마무리 작업에 쓰임
    componentWillUnmount() {
        // 타이머 해제 작업
        // clearInterval : 해제
        clearInterval(this.timerId);
    }
    
    showSigan() { // 시간 출력용
        this.setState({
            date:new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>반가워~</h1>
                <h2>지금은 {new Date().toLocaleTimeString()}</h2> {/* 정적 */}
                <h2>현재 시간은 {this.state.date.toLocaleTimeString()}</h2> {/* state 사용해서 렌더링(동적) */}
            </div>
        );
    }
}

export default Clock2;