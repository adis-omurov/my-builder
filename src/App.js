import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import AntBuilder from './component/AntBuilder/AntBuilder';

import Auth from './component/Auth/Auth';
import Checkout from './component/Checkout/Checkout';
import Layout from './component/Layout/Layout';
import Logout from './component/Logout/Logout';

import Orders from './component/Orders/Orders';
import { restore } from './store/action/auth';


const App = () =>{
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.token !== null);

  useEffect(() => restore(dispatch), [dispatch]);

  let routesOutput = (
    <Switch>
      <Route path="/" exact component={AntBuilder} />
      <Route path="/auth" component={Auth} />
      <Redirect to="/" />
    </Switch>
  );

  if (isAuthenticated) {
    routesOutput = (
      <Switch>
        <Route path="/" exact component={AntBuilder} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/auth" component={Auth} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <div className="App">
     <Layout>
     {routesOutput}
     </Layout>
    </div>
  );
}

export default App;
