import { Meal } from "./Meal";
import Card from "../ui/Card";
import classes from "./MealItem.module.css";

function MealItem({ meal }: { meal: Meal }) {
  return (
    <li>
      <Card>
        <div className={classes.meal}>
          <h3>{meal.name}</h3>
          <div className={classes.description}>{meal.description}</div>
          <div className={classes.price}>{`$${meal.price.toFixed(2)}`}</div>
        </div>
      </Card>
    </li>
  );
}

export default MealItem;
