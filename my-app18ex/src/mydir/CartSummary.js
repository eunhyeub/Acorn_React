import React from "react";
import { useSelector } from "react-redux";

const getTotalPrice = (cart) =>
  cart.reduce((total, item) => total + item.price * item.quantity, 0);

const CartSummary = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <h2>총 금액</h2>
      <p>{getTotalPrice(cart)}원</p>
    </div>
  );
};

export default CartSummary;
