import Input from "../ui/Input";
import classes from "./MealItemForm.module.css";
import { useRef, useState } from "react";

function MealItemForm({
  onAddToCart,
}: {
  onAddToCart: (amount: number) => void;
}) {
  const [isValid, setIsValid] = useState(true);

  const amountInputRef: React.MutableRefObject<HTMLInputElement> =
    useRef() as React.MutableRefObject<HTMLInputElement>;

  function addToCartHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +amountInputRef.current.value;
    if (enteredAmount.trim().length <= 0 || enteredAmountNumber <= 0) {
      setIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  }

  return (
    <form className={classes.form} onSubmit={addToCartHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        id="amount"
        uniqueId={Math.random().toFixed(3).toString()}
        settings={{
          type: "number",
          min: "0",
          max: "10",
          step: "1",
          default: "1",
        }}
      />
      <div>
        <button>+ Add</button>
        {!isValid && <p>Pls enter a valid amount</p>}
      </div>
    </form>
  );
}

export default MealItemForm;
