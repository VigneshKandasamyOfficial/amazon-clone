import { useDispatch } from "react-redux";
import "../App.css";
import { itemsAdded } from "../reducers/cartSlice";
import { toast } from "react-toastify";

const ProductCard = (props) => {
  const { title, description, price, image } = props.product || {};
  const dispatch=useDispatch()
  const addItems =()=>{
    dispatch(itemsAdded(props.product))
    toast.success(title+"was added  to cart successfully")
  }
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <div className="product-info">
        <div className="title">{title}</div>
        <div className="description">
          <strong>Description:</strong>
          <br />
          {description}
        </div>
        <div className="price">
          <strong>Price: $</strong>
          {price}
        </div>
      </div>
      <div className="buttons">
        <button>Buy</button>
        <button onClick={addItems}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
