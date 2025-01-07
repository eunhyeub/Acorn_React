import React from "react";
import "../mycss/TodoItem.css";

const TodoItem = ({text, checked, id, onToggle, onRemove}) => {
    // CSS class를 동적으로 처리
    return (
        <div className="todo-item" onClick={() => onToggle(id)}>
            <div className="remove" onClick={(e) => {
                e.stopPropagation(); // onToggle이 실행되지 않도록 함. 이벤트 전파 방지
                onRemove(id);
            }}>&times; {/* X 닫기 버튼 */}
            </div>
            <div className={`todo-text ${checked && 'checked'}`}>
                <div>{text}</div> 
            </div>
            {checked && <div className="check-mark">✔️</div>}
        </div>
    );
};


export default TodoItem;