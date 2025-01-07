import React from "react";
import "../mycss/DeptItem.css";

const DeptItem = ({ clientName, address, visitDate, onRemove}) => {
    // CSS class를 동적으로 처리
    return (
        <div className="dept-item">
            <div className="dept-details">
            <table border={1}>
          <thead>
            <tr>
              <th>거래처이름</th>
              <th>주소</th>
              <th>방문일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{clientName}</td>
              <td>{address}</td>
              <td>{visitDate}</td>
            </tr>
          </tbody>
        </table>
            </div>
      <button className="remove-button"
        onClick={(e) => {
          e.stopPropagation(); // 이벤트 전파 방지
          onRemove(clientName); // clientName을 삭제 핸들러에 전달
        }}
      >
        삭제
      </button>
    

      <button className="all-remove" onClick={(e) => {
        e.stopPropagation();
        onRemove(clientName);
      }}>전체 삭제</button>
      </div>
    );
};


export default DeptItem;