import React from "react";
// import { Meal } from "../../components/meals/Meal";
import { ICartItem } from "./CartProvider";

const CartContext = React.createContext({
  items: [] as ICartItem[],
  totalCost: 0,
  addItem: (item: ICartItem) => {},
  removeItem: (id: string) => {}
});

export default CartContext;