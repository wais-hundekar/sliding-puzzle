import React from "react";
import './index.css';
import './Board'
function Square(props) {
return(
    <button className = {props.styles} onClick ={() => {props.clicked(props.pos, props.empty)}}>
        {props.num}
    </button>
)
}

export default Square;