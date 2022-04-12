import Card from "../ui/Card";
import { Meal } from "./Meal";
import MealItem from "./MealItem";
import classes from "./MealsList.module.css";

function MealsList() {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem key={meal.id + Math.random().toFixed(3)} meal={meal} />
          ))}
        </ul>
      </Card>
    </section>
  );
}

export const DUMMY_MEALS: Meal[] = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export default MealsList;
