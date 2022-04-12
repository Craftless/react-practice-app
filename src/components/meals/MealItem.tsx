import { Meal } from "./Meal";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../assets/store/cart-context";

function MealItem({ meal }: { meal: Meal }) {

  const cartCtx = useContext(CartContext);

  function addToCartHandler(amount: number) {
    cartCtx.addItem({meal: meal, amountOfItems: amount}); 
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{`$${meal.price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
}

export default MealItem;
