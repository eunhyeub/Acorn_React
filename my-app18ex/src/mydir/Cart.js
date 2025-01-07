import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "./store";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity(id, newQuantity));
    }
  };

  return (
    <div>
      <h2>장바구니</h2>
      {cart.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}원 x {item.quantity}
              <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
              <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => handleRemove(item.id)}>삭제</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
