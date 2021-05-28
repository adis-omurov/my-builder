import Button from "../../UI/Button/Button";
import classes from "./AntControls.module.css";
import AntControl from "./AntControl/AntControl";

const AntControls = ({ingredients, startOrdering }) => {
    const results = [];
     let total = 0;
    for (const ingredient in ingredients) {
        total += ingredients[ingredient]
         results.push(<AntControl type={ingredient}  count={ingredients[ingredient]}/>)
    }
        
    return ( 
        <div className={classes.AntControls}>
           <div>
           {results}
           <div className={classes.Button}>
           <Button onClick={() => startOrdering()} disabled={!total}>Order</Button>
           </div>
           
           </div> 
        </div>
     );
}
 
export default AntControls;