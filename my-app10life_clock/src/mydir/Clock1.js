import { Component } from "react";

class Clock1 extends Component {
    render() {
        return(
            <div>
                <h1>안녕~</h1>
                <h2>지금은 {new Date().toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock1;