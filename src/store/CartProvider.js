import React, { useState } from "react";
import StoreContext from "./store-context";

const CartProvider = (props) => {
  const [data, setData] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  console.log(totalValue);

  const totalprice = (items, changer) => {
    if (changer === true) {
      const totally = items.price * items.amount;
      setTotalValue(totalValue + totally);
    }
    if (changer === false) {
      const reducer = items.price;
      setTotalValue(totalValue - reducer);
    }
  };

  const addHandler = (selectedItem) => {
    const finalamount = selectedItem.amount * selectedItem.price;
    if (finalamount + totalValue > 200) {
      alert("total amount should not greater than 200");
    } else {
      setData((prevItems) => {
        const filtered = prevItems.filter((item) => {
          return item.id === selectedItem.id;
        });
        if (filtered.length > 0) {
          prevItems.map((item) => {
            if (item.id === selectedItem.id)
              item.amount = item.amount + selectedItem.amount;
            return item;
          });
          return [...prevItems];
        } else {
          return [selectedItem, ...prevItems];
        }
      });
      totalprice(selectedItem, true);
    }
  };
  const removeHandler = (selectedItem) => {
    setData((prevItems) => {
      if (selectedItem.amount === 1) {
        const filtered = prevItems.filter((item) => {
          return item.id !== selectedItem.id;
        });
        return [...filtered];
      } else {
        prevItems.map((item) => {
          if (item.id === selectedItem.id) item.amount = item.amount - 1;
          return item;
        });
        return [...prevItems];
      }
    });
    totalprice(selectedItem, false);
  };

  const clearHandler = () => {
    setTotalValue(0);
    setData([]);
  };
  const CartContext = {
    item: data,
    removeItem: removeHandler,
    addItem: addHandler,
    total: totalValue,
    clear: clearHandler,
  };
  return (
    <StoreContext.Provider value={CartContext}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default CartProvider;
