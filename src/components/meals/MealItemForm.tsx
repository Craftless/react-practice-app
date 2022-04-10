import Input from "../ui/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm({
  onAddToCart,
}: {
  onAddToCart: React.FormEventHandler<HTMLFormElement>;
}) {
  return (
    <form className={classes.form} onSubmit={onAddToCart}>
      <Input
        label="Amount"
        id="amount"
        uniqueId={Math.random().toFixed(3).toString()}
        settings={{ type: "number", min: "0", max: "10", step: "1" }}
      />
      <div>
        <button>+ Add</button>
      </div>
    </form>
  );
}

export default MealItemForm;
