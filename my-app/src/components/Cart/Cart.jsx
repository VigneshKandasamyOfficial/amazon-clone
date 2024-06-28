import { useSelector } from "react-redux";
import './Cart.css';
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const newTotal = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotal(newTotal);
    };

    calculateTotal();
  }, [items]);

  return (
    <>
      <h1>Shopping Cart</h1>
      <div className="body">
        <div className="cart">
          {items.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>
        <div className="checkout-section">
          <div className="total">Total : $ {total.toFixed(2)}</div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
