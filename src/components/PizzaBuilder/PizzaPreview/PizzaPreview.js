import PizzaIngredient from "../PizzaIngredient/PizzaIngredient";

import classes from "./PizzaPreview.module.css";
import ingredientsBackground from "../../../images/plate.jpg";

const PizzaPreview = ({ ingredients, price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<PizzaIngredient key={ingredient + i} type={ingredient} />)
    }
  }

  return (
    <div className={classes.PizzaPreview}>
      <div className={classes.pizza}>
        <div
          className={classes.ingredients}
          style={{ backgroundImage: `url(${ingredientsBackground})`,width:'450px', height:'450px', backgroundSize:'cover', backgroundPosition: 'center' }}>
          {result}
        </div>
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default PizzaPreview;