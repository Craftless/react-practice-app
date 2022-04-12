import { ICartItem } from "../../assets/store/CartProvider";
import classes from "./CartItem.module.css";

const CartItem = (props: {
  cartItem: ICartItem;
  onRemove: (id: string) => void;
  onAdd: (item: ICartItem) => void;
}) => {
  const price = `$${props.cartItem.meal.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.cartItem.meal.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>
            x {props.cartItem.amountOfItems}
          </span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove.bind(null, props.cartItem.meal.id)}>
          −
        </button>
        <button
          onClick={props.onAdd.bind(null, {
            ...props.cartItem,
            amountOfItems: 1,
          })}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
