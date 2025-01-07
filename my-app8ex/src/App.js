import { useState } from 'react';
import './App.css';

function ProductList({itemsProps}) {
  return (
    <table border={1}>
      <tr>
        <th>코드</th><th>상품명</th><th>가격</th>
      </tr>
      {itemsProps && itemsProps.map((item) => (
        <tr>
          <td>{item.code}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      ))}
    </table>
  );
}

function setDelete({items, onRemove}) {
  return (
    <div>
      {items && items.map((item) => (
        <App item={items} key={item.code} onRemove={onRemove}/>
      ))}
    </div>
  );
}



function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [code, setCode] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);


  const handleCodeChange = (e) => {
    setCode(e.target.value);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.length === 0) {
      return;
    } 
    const newItem = {
      code:code,
      name:name,
      price:price
    };

    setItems((preItems) => [...preItems, newItem]);
    console.log(items);
    setText("");
    
  }

  const onRemove = code => {
    setCode(items.filter(item => item.code !== code));
  }

  return (
    <div className="App">
        <h2>상품 목록</h2>
        <form onSubmit={handleSubmit}>
        코드 : <input type='text' id="new-code" onChange={handleCodeChange} value={code}/><br/>
        상품명 : <input type='text' id="new-name" onChange={handleNameChange} value={name}/><br/>
        가격: <input type='text' id="new-price" onChange={handlePriceChange} value={price}/> &nbsp;&nbsp;
        <button>등록</button>
        </form>
        <button onClick={setDelete}>삭제</button><br/>
        <setDelete items={items} onRemove={onRemove} />
        <button onClick={ProductList}>결과보기</button>
        <ProductList itemsProps={items} />
        <br/>
        <div>
          총 건수 : {items.length} <br/>
          가격 총합 : {} <br/>
          평균 : {price / items.length}
          </div>        
    </div>
  );
}

export default App;
