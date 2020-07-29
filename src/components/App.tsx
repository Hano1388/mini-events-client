/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';

import { Navbar } from './Navbar';
import { WelcomePage } from './pages/WelcomePage';
import { SignInPage } from './pages/SignInPage';
import { User } from '../api/user';
import { Session } from '../api/session';
import { EventIndexPage } from './pages/EventIndexPage';
import { EventShowPage } from './pages/EventShowPage';
import { NotFoundPage } from './pages/NotFoundPage'

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
      <div className="ui container">
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/events" component={EventIndexPage} />
          {/* 
            Ideally send down the current user as well or create a context for it  
            to use its coordinates for centering the map
          */}
          {/* <Route
            path="/events"
            exact
            component={(routeProps: RouteComponentProps<{}>) => <EventIndexPage currentUser={currentUser} {...routeProps} />}

          /> */}

          <Route
            path="/sign_in"
            component={(routeProps: RouteComponentProps<{}>) => <SignInPage onSignIn={getUser} {...routeProps} />}
          />

          <Route exact path="/events/:id" component={EventShowPage} />
          <Route exact path="/events/:id" component={EventShowPage} />
          {/* 
            A <Route /> component without a "path" prop will render 
            for all routes. This is primarily inside of a <Switch>
          */}
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
