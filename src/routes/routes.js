import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Sunlight from '../pages/sunlight';
import Water from "../pages/water";
import Pets from "../pages/pets";
import Home from "../pages/home";
import Picks from "../pages/picks";
import Plant from "../pages/plant";
import Auth from '../services/auth';



const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.getAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);



const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/sunlight" component={Sunlight} />
        <PrivateRoute path="/water" component={Water} />
        <PrivateRoute path="/pets" component={Pets} />
        <PrivateRoute path="/picks" component={Picks} />
        <PrivateRoute path="/plant/:id" component={Plant} />
        <Route path="*" component={() => <h1 style={{ textAlign: "center" }}>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;