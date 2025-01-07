import React from "react";

function Component1(props) { 
        return (
            <div>
                 미터 : {props.meter} , 센티미터 : {props.meter * 100}
            </div>
        );               
}

export default Component1;