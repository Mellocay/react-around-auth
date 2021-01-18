import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './Header';

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {
        () => props.loggedIn ?
          <>
            <Header email={props.email} link='/signin' linkText='Logout' onClick={props.logout} />
            <Component {...props} />
          </>
          : <Redirect to='./signin' />
      }
    </Route>
  )
}

export default ProtectedRoute; 