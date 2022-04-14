import { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import StoreContext from "../store/store-context";
// import { useState } from "react/cjs/react.production.min";

const Cart = (item) => {
  // const [isVaild, setIsValid] = useState("true");
  // const [message, setMessage] = useState("");
  const cartCtx = useContext(StoreContext);

  const totalAmount = `$${cartCtx.total.toFixed(2)}`;
  // if (totalAmount === 200) {
  //   setIsValid("flase");
  //   setMessage("Total amount must not greater than $200");
  // }elseif(totalAmount!== 200){

  // }

  const hasItems = cartCtx.item.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({
      id: item.id,
      name: item.name,
      amount: 1,
      price: item.price,
    });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.item.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={item.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={item.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
