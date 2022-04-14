import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import StoreContext from "../../store/store-context";

const MealItem = (props) => {
  const cartCtx = useContext(StoreContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    // console.log("inside add to cart  handler ");
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: +amount,
      price: props.price,
    });
  };

  return (
    <div className={classes.cart}>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
          <div className="images">
            <img src={props.imageUrl} alt="new" width={100} height={100} />
          </div>
        </div>

        {/* <img src={props.imageUrl} alt="new" /> */}
        <div>
          <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </li>
    </div>
  );
};

export default MealItem;
