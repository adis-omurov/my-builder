import classes from "./Auth.module.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import { auth, start } from "../../store/action/auth";
import { Redirect, useLocation } from "react-router";


export default function Auth ()  {
  const dispatch = useDispatch();
  const { loading, error, token } = useSelector(state => state.auth);
  const location = useLocation();

  const formSubmitted = (event) => {
    dispatch(start());

    const data = new FormData(event.target);
    const method = event.nativeEvent.submitter.innerText === "Sign in"
      ? "signin" : "signup";
    dispatch(auth(method, data.get('email'), data.get('password')));

    event.preventDefault();
  }

  let formOutput ="Loading";
  if (!loading) {
    formOutput = (
      <form onSubmit={formSubmitted} className={classes.form}>
        <h1 className={classes.h1}>Welcome</h1>
        <input type="email" placeholder="E-mail" name="email" required  />
        <input type="password" placeholder="Password" name="password" required minLength="6" />
        <div className={classes.Button}>
          <Button green="green">Sign in</Button>
          <Button>Sign up</Button>
        </div>

      </form>
    );
  }

  let errorOutput = null;
  if (error) {
    errorOutput = <h4 className={classes.error}>{error.message}</h4>;
  }

  const [, redirect] = location.search.split('?');
  let redirectOutput = null;
  if (token !== null) {
    redirectOutput = <Redirect to={"/" + redirect ? redirect : ""} />;
  }

  return (
    <div className={classes.Auth}>
      {errorOutput}
      {formOutput}
      {redirectOutput}
    </div>
  );
};