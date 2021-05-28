import classes from './AntIngredient.module.css'
import React from 'react'
import logoAnt from '../../../Imges/LogoAnt.png'
import logoAnt2 from '../../../Imges/LogoAnt2.png'
// import brown from '../../../img/brown.svg'
// import black from '../../../img/black.svg'
// import pink from '../../../img/pink.svg'
// import violet from '../../../img/violet.svg'
// import classes from './DonutIngredient.module.css'


const AntIngredient = ({type, fixed}) => {
    const types = {
        logoAnt: {
          backgroundImage: `url(${logoAnt})` ,
          width: "60px",
          height: "60px",
        },
        logoAnt2: {
          backgroundImage: `url(${logoAnt2})`,
          width: "60px",
          height: "60px"
        },
        // black: {
        //   backgroundImage: url(${black}),
        //   width: "60px",
        //   height: "60px",
        //   backgroundSize: "cover"
        // },
        // brown: {
        //   backgroundImage: url(${brown}),
        //   backgroundSize: "cover",
        //   width: "60px",
        //   height: "60px"
        // },
        // violet: {
        //   backgroundImage: url(${violet}),
        //   width: "60px",
        //   backgroundSize: "cover",
        //   height: "60px"
        // },
        // pink: {
        //   backgroundImage: url(${pink}),
        //   backgroundSize: "cover",
        //   width: "60px",
        //   height: "60px"
        // },
    
    
      }
      function getPosition(ingredientWidth) {
        const dounutDiameter = 400;
        const dounutRadius = dounutDiameter / 2;
        const ingredientRadius = parseInt(ingredientWidth) / 2;
    
        const ingredientTop = Math.round(Math.random() * dounutDiameter);
        const ingredientLeft = Math.round(Math.random() * dounutDiameter);
    
        const distance = Math.sqrt(
          Math.pow(ingredientTop - dounutRadius, 2) + Math.pow(ingredientLeft - dounutRadius, 2)
        ) + ingredientRadius;
    
        return distance < dounutRadius
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
    
        // Get random rotation for this ingredient.
        types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;
      }
    

    return ( 
        <div className={classes.AntIngredient} style={types[type]}></div>
     );
}
 
export default React.memo(AntIngredient);