import { useContext } from "react";
import CartContext from "../../assets/store/cart-context";
import { ICartItem } from "../../assets/store/CartProvider";
import Modal from "../ui/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart({ onHideCart }: { onHideCart: () => void }) {

  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items;
  
  const totalCost = `$${cartCtx.totalCost.toFixed(2)}`;
  const cartIsEmpty = cartCtx.items.length <= 0;

  function addToCartHandler(item: ICartItem) {
    cartCtx.addItem(item);
  }

  function removeFromCartHandler(id: string) {
    cartCtx.removeItem(id);
  }

  return (
    <Modal onHideCart={onHideCart}>
      <div className={classes["cart-items"]}>
        {cartItems.map((item) => {
          return <CartItem cartItem={item} onAdd={addToCartHandler} onRemove={removeFromCartHandler} key={item.meal.id + Math.random().toFixed(3)} />;
        })}
      </div>
      <div className={classes.total}>
        <span>Total Cost</span>
        <span>{totalCost}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onHideCart}>
          Close
        </button>
        { !cartIsEmpty && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
