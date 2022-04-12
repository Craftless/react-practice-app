import { useContext, useEffect, useState } from "react";
import CartContext from "../../assets/store/cart-context";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton({ onClick }: { onClick: () => void }) {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amountOfItems;
  }, 0);

  const buttonClasses = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : null
  }`;

  useEffect(() => {
    if (cartCtx.items.length <= 0) return;

    setButtonIsHighlighted(true);
    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
