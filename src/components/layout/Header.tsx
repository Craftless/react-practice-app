import classes from "./Header.module.css";
import image from "../../assets/meals.jpg";
import HeaderCartButton from "../cart/HeaderCartButton";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="Some food" />
      </div>
    </>
  );
}

export default Header;
