// import axios from "../../axios";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Order from "./Order/Order";
// import withAxios from "../withAxios";
// import { load } from "../../store/action/orders";
// import Loading from "../../Loading/Loading";
// import classes from "./Orders.module.css";

import axios from "../../axios"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/action/builder";
import withAxios from "../withAxios";
import classes from "./Orders.module.css";
import Order from "./Order/Order";





const Orders = () => {
  const dispatch = useDispatch();
  const { token, id } = useSelector(state => state.auth);
  const orders = useSelector(state => state.orders);

  useEffect(() => dispatch(load(token, id)), [dispatch, id, token]);

  const results = orders.map(order => <Order key={order.id} {...order} />);

  return (
    <div className={classes.Orders}>
      {results}
    </div>
  );
}

export default withAxios(Orders, axios);