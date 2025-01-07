import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProductList from './mydir/ProductList';
import Cart from './mydir/Cart';
import CartSummary from './mydir/CartSummary';
import Main from './mydir/Main';

function App() {
  return (
    <Router>
    <div className="App">
      <h2>쇼핑 장바구니🧺</h2>
      <nav>
        <Link to="/">메인</Link> |&nbsp;
        <Link to="/list">상품 목록</Link> |&nbsp;
        <Link to="/cart">상품</Link> |&nbsp;
        <Link to="/cartsum">상품합계</Link> |&nbsp;
      </nav>
      <hr/>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/list' element={<ProductList />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/cartsum' element={<CartSummary />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
