import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import MealsList from "./components/meals/MealsList";
import MealsSummary from "./components/meals/MealsSummary";
import { useState } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandler() {
    setCartIsShown(true);
  }
  function hideCartHandler() {
    setCartIsShown(false);
  }

  return (
    <>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <MealsSummary />
        <MealsList />
      </main>
    </>
  );
}

export default App;
