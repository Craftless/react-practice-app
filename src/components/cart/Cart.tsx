import { Meal } from "../meals/Meal";
import MealItem from "../meals/MealItem";
import Modal from "../ui/Modal";
import classes from "./Cart.module.css";

function Cart({ onHideCart }: { onHideCart: () => void }) {
  const cartItems: Meal[] = [
    { id: "m1", name: "Hello", description: "Something", price: 5 },
  ];

  return (
    <Modal onHideCart={onHideCart}>
      {cartItems.map((item) => {
        return <MealItem meal={item} />;
      })}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
