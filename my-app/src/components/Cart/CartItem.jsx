import { useDispatch } from "react-redux";
import "./Cart.css";
import {
  itemDelete,
  increaseQuantity,
  decreaseQuantity,
} from "../../reducers/cartSlice";
import { toast } from "react-toastify";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { image, title, price, quantity, id, subtotal } = props.item;

  const del = () => {
    dispatch(itemDelete(id));
    toast.success(title + " was removed from Shopping cart");
  };

  const incQuantity = () => {
    dispatch(increaseQuantity(id));
  };

  const decQuantity = () => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div className="cart-item">
      <img src={image} alt={title} />
      <div className="cart-item-details">
        <div>{title}</div>
        <div>Price: ₹{price.toFixed(2)}</div>
      </div>
      <div className="cart-item-actions">
        <button className="quantity-btn" onClick={decQuantity}>
          -
        </button>
        <span>{quantity}</span>
        <button className="quantity-btn" onClick={incQuantity}>
          +
        </button>
      </div>
      <button className="delete" onClick={del}>
        Remove
      </button>
      <button className="buy-now">Proceed to Buy</button>
    </div>
  );
};

export default CartItem;
