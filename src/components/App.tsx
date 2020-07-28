/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';

import { Navbar } from './Navbar';
import { WelcomePage } from './pages/WelcomePage';
import { SignInPage } from './pages/SignInPage';
import { User } from '../api/user';
import { Session } from '../api/session';




const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null)

  // this prevents useEffect infinite calls
  const getUser = useCallback(() => {
    User.current().then(data => {
      console.log(data);
      if (typeof data.id !== 'number') {
        setCurrentUser(null);
      } else {
        setCurrentUser(data);
      }
    })
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const destroySession = () => {
    Session.destroy().then(() => setCurrentUser(null))
  }

  return (
    <BrowserRouter>
      <header>
        <Navbar
          {...{ currentUser, onSignOut: destroySession }}
        />
      </header>
      <div className="ui container segment">
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          {/* <Route
            path="/sign_in"
            component={SignInPage}
            withProps={{ onSignIn: () => getUser() }}
          /> */}

          <Route
            path="/sign_in"
            component={(routeProps: RouteComponentProps<{}>) => <SignInPage onSignIn={getUser} {...routeProps} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
