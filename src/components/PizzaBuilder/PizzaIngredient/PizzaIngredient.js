import React from "react";
import classes from "./PizzaIngredient.module.css";
import pinkyellowcandy from "../../../images/pinkyellowcandy.svg";
import yellowcandy from "../../../images/yellowcandy.svg";
import redcandy from "../../../images/redcandy.svg";
import orangecandy from "../../../images/orangecandy.svg";
import greencandy from "../../../images/greencandy.svg";
// import yellowcandy from "../../../images/yellowcandy.svg";

const PizzaIngredient = ({ type, fixed }) => {
  const types = {
    pinkyellowcandy: { backgroundImage: `url(${pinkyellowcandy})`, backgroundSize: "cover",backgroundPosition: "center", width: "45px", height: "45px" },
    yellowcandy: { backgroundImage: `url(${yellowcandy})`,backgroundSize: "cover",backgroundPosition: "center",  width: "45px", height: "45px" },
    redcandy: { backgroundImage: `url(${redcandy})`, backgroundSize: "cover",backgroundPosition: "center",  width: "45px", height: "45px" },
    orangecandy: { backgroundImage: `url(${orangecandy})`, backgroundSize: "cover",backgroundPosition: "center",  width: "45px", height: "45px" },
    greencandy: { backgroundImage: `url(${greencandy})`, backgroundSize: "cover",backgroundPosition: "center",  width: "45px", height: "45px" },
  };

  function getPosition(ingredientWidth) {
    const pizzaDiameter = 380;
    const pizzaRadius = pizzaDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * pizzaDiameter);
    const ingredientLeft = Math.round(Math.random() * pizzaDiameter);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - pizzaRadius, 2) + Math.pow(ingredientLeft - pizzaRadius, 2)
    ) + ingredientRadius;

    return distance < pizzaRadius
      ? {
        top: ingredientTop - ingredientRadius,
        left: ingredientLeft - ingredientRadius
      }
      : getPosition(ingredientWidth);
  }

  // Get random position for this ingredient.
  if (!fixed) {
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
  }
  // Get random rotation for this ingredient.
  types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.PizzaIngredient} style={types[type]}></div>
  );
}

export default React.memo(PizzaIngredient);