import classes from "./Order.module.css";

const Order = ({ name, phone, address, ingredients, price }) => {
  const outputIngredients = Object.keys(ingredients)
    .map(ingredient => <em key={ingredient}>{ingredient} - {ingredients[ingredient]}</em>);

  return (
    <div className={classes.Order}>
    <div className={classes.test}>
      <div className={classes.border}>
        <h1>Name : {name}</h1>
        <h3>Phone : {phone}</h3>
        <h4>Addres : {address}</h4>
      </div>
      <li className={classes.or}>{outputIngredients}</li>
      <strong>{price}сом</strong>
    </div>
  </div>
  );
}

export default Order;