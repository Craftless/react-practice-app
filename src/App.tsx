import Header from "./components/layout/Header";
import MealsList from "./components/meals/MealsList";
import MealsSummary from "./components/meals/MealsSummary";

function App() {
  return (
    <>
      <Header />
      <main>
        <MealsSummary />
        <MealsList />
      </main>
    </>
  );
}

export default App;
