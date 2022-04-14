import React from "react";

const StoreContext = React.createContext({
  item: [],
  total: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default StoreContext;
