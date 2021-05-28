import classes from "./AntPreview.module.css";
import sand from '../../../Imges/sand.png'
import AntIngredient from "../AntIngredient/AntIngredient";
const AntPreview = ({ingredients, price}) => {
const result = []

    for(const ingredient in ingredients){
        for(let i = 0 ; i < ingredients[ingredient]; i++){
            result.push(<AntIngredient key={ingredient + i} type={ingredient} />)
        }
    }
    return ( 
        <div className={classes.AntPreview} >
            <div className={classes.sand}  style={{ backgroundImage: `url(${sand})`, backgroundPosition: "center", backgroundSize: 'cover', witdth: "520px", height: "400px", marginRight: "-3px" }}>
                <div className={classes.ingredients }>{result }</div>
            </div>
            <div className={classes.price}>{price.toFixed(0)}som</div>
        </div>
     );
}
export default AntPreview