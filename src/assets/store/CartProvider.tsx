import React, { useReducer } from "react";
import { Meal } from "../../components/meals/Meal";
// import CartItem from "../../components/cart/CartItem";
import CartContext from "./cart-context";

export interface ICartItem {
  meal: Meal;
  amountOfItems: number;
}

interface CartState {
  items: ICartItem[];
  totalCost: number;
}

const defaultCartState: CartState = {
  items: [],
  totalCost: 0,
};

const cartReducer: (
  state: CartState,
  action: { type: "ADD" | "REMOVE"; item?: ICartItem; id?: string }
) => CartState = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (action.item) {
        const updatedTotalCost = state.totalCost + action.item.meal?.price;

        const existingItemIndex = state.items.findIndex(
          (item) => item.meal.id === action.item?.meal.id
        );
        const existingItem = state.items[existingItemIndex];
        let updatedItems: ICartItem[];

        if (existingItem) {
          const updatedItem = {
            ...existingItem,
            amountOfItems:
              existingItem.amountOfItems + action.item.amountOfItems,
          };

          updatedItems = [...state.items];
          updatedItems[existingItemIndex] = updatedItem;
        } else {
          updatedItems = state.items.concat(action.item as ICartItem);
        }

        return {
          items: updatedItems,
          totalCost: updatedTotalCost,
        };
      }
      break;
    case "REMOVE":
      if (action.id) {
        const existingItemIndex = state.items.findIndex(
          (item) => item.meal.id === action.id
        );
        const existingItem = state.items[existingItemIndex];
        if (existingItem) {
          const updatedTotalCost = state.totalCost - existingItem.meal.price;
          const updatedItem: ICartItem = {
            ...existingItem,
            amountOfItems: existingItem.amountOfItems - 1,
          };
          let updatedItems = [...state.items];
          updatedItems[existingItemIndex] = updatedItem;

          updatedItems = updatedItems.filter((item) => item.amountOfItems > 0);

          return {
            items: updatedItems,
            totalCost: updatedTotalCost,
          };
        }
      }
      break;
  }

  return defaultCartState;
};

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  function addItemHandler(item: ICartItem) {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  }

  function removeItemHandler(id: string) {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  }

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalCost: cartState.totalCost,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
