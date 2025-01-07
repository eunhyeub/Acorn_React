import { useCallback, useState } from 'react';
import DeptListTemplate from "./mydir/DeptListTemplate";
import Form from "./mydir/Form.js";
import DeptList from './mydir/DeptList.js';



function App() {
  const [visits, setVisits] = useState([]);
  const [formData, setFormData] = useState([ // 단일 객체로 폼 데이터 관리
    {  
    id:0,
    clientName: "무한상사", 
    address: "서울시 강남구", 
    visitDate: "2024-11-18"
    },
    {  
      id:1,
      clientName: "산리오", 
      address: "서울시 광진구", 
      visitDate: "2024-11-10"
    },

]);

  const [nextId, setNextId] = useState(2); // 다음번 id 값

  const handleChange = useCallback((e) => {
    setVisits(e.target.value);
  }, []);

  const addVisit = useCallback(() => {
    setVisits((prevVisits) => [...prevVisits, formData]);
    setFormData((prevTodos) => 
      prevTodos.concat({
        clientName:visits.clientName,
        address:visits.address,
        visitDate:visits.visitDate
      })
    );
    setVisits("");
  }, [visits]);

  const handleKeyDown = useCallback((e) => {
    if(e.key === "Enter") {
      addVisit();
    }
  }, [addVisit]);

  const deleteVisit = useCallback((clientName) => {
    setFormData((prevVisits) => prevVisits.filter((visit) => visit.clientName !== clientName));
  }, []);

  const clearVisits = () => {
      setFormData([]);
  };

  
  return (
      <DeptListTemplate
      form={
        <Form 
        value={visits}
        onKeyDown={handleKeyDown}
        onChange={handleChange} 
        onCreate={addVisit}
        />
      }>

        <DeptList
          formData={formData}
          onRemove={deleteVisit}
        />
      </DeptListTemplate>
    
  );
}

export default App;
