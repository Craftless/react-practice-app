import { useEffect, useState } from "react";
import Card from "../ui/Card";
import { Meal } from "./Meal";
import MealItem from "./MealItem";
import classes from "./MealsList.module.css";

function MealsList() {
  const [meals, setMeals] = useState([] as Meal[]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const getMeals = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://react-food-order-app-385b4-default-rtdb.firebaseio.com/meals.json"
        );

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();
        const meals: Meal[] = [];

        for (const key in data) {
          meals.push({ ...data[key] });
        }
        setMeals(meals);
      } catch (error) {
        const httpError = error as Error;
        setError(httpError.message);
      }
      setIsLoading(false);
    };
    getMeals();
  }, []);

  if (error) {
    return (
      <section>
        <p className={classes["meals-error"]}>{error}</p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section>
        <p className={classes["meals-loading"]}>Loading...</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {meals.map((meal) => (
            <MealItem key={meal.id + Math.random().toFixed(3)} meal={meal} />
          ))}
        </ul>
      </Card>
    </section>
  );
}

// export const DUMMY_MEALS: Meal[] = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

export default MealsList;
