import axios from "../../../src/axios";
import { useSelector } from "react-redux";
import AntPreview from "../AntBuilder/AntPreview/AntPreview";
import withAxios from "../withAxios";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import classes from "./Checkout.module.css";

const Checkout = ({ history }) => {
    const {token, id} = useSelector(state => state.auth);
    const ingredients = useSelector(state => state.builder.ingredients);
    const price = useSelector(state => state.builder.price);
  
    function cancelCallback() {
        history.replace('/')
    }
   
    function submitCallback(event) {
        const data = new FormData(event.target);

        axios.post('/orders.json?auth=' + token, {
            name: data.get('name'),
            address: data.get('address'),
            phone: data.get('phone'),
            ingredients: ingredients,
            price: price,
            userId : id
        }).then(response => {
            history.replace('/');
        });

        event.preventDefault();
    }
    return (
        <div className={classes.Checkout}>
            <AntPreview ingredients={ingredients} price={price} />
            <CheckoutForm cancelCallback={cancelCallback}
                submitCallback={submitCallback} />
        </div>
    );
}

export default withAxios(Checkout, axios);