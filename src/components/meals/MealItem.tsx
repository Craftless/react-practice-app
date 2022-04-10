import { Meal } from "./Meal";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem({ meal }: { meal: Meal }) {

  function addToCartHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{`$${meal.price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
