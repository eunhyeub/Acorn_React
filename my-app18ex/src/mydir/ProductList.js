import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./store";

const products = [
  { id: 1, name: "마우스", price: 5000 },
  { id: 2, name: "키보드", price: 50000 },
  { id: 3, name: "모니터", price: 500000 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>상품 목록</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}원
            <button onClick={() => handleAddToCart(product)}>장바구니에 추가</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
