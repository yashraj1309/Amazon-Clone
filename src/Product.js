import "./Product.css";
import { useStateValue } from "./StateProvider";

export default function Product(props) {
  // dispatch the item
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
        ratingCount: props.ratingCount
      }
    });
  };
  return (
    <div className="product" id={props.id}>
      <div className="product_info">
        <p className="product_info_title">{props.title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product_rating">
          {Array.from({ length: Math.round(props.rating) }, (_, index) => (
            <span key={index} role="img" aria-label="star">
              &#11088;
            </span>
          ))}
          <span className="product_rating_count">({props.ratingCount})</span>
        </div>
      </div>
      <img src={props.image} alt="" />
      {/* <p className="product_description">{props.description}</p> */}
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}
