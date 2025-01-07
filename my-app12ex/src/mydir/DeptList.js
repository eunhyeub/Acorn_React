import React from "react";
import DeptItem from "./DeptItem";

const DeptList = ({ formData, deleteVisit, clearVisits }) => {
    return (
      <div className="dept-list">
        {formData.map((visit) => (
          // visit.id가 존재한다고 가정하고 id를 key로 사용
          <DeptItem
            key={visit.id}  // key를 visit.id로 설정
            clientName={visit.clientName}
            address={visit.address}
            visitDate={visit.visitDate}
            onRemove={deleteVisit}  // 방문 삭제 처리
          />
        ))}
        {formData.length > 0 && (
          <button onClick={clearVisits}>전체 삭제</button>
        )}
      </div>
    );
  };

export default DeptList;