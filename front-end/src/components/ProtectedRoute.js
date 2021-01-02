import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component, ...props }) => {
  return (
    <Route>
      {
        () => props.loggedIn === true ? <component {...props} /> : <Redirect to="./login" />
      }
    </Route>
  )
}

export default ProtectedRoute;