import classes from "./Logo.module.css";
import logo from "../../../images/candyshop.svg";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Logo of the Candy project" />
      <div>Candy</div>
    </div>
  );
}

export default Logo;