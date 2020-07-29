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
import { AuthRoute } from './AuthRoute';
import { SignUpPage } from './pages/SignUpPage';
import { EventNewPage } from './pages/EventNewPage';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null)

  // this prevents useEffect infinite calls
  const getUser = useCallback(() => {
    User.current().then(data => {
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
      <section className="content">
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
          <Route
            path="/sign_up"
            component={SignUpPage}
          // We can pass down getuser to SignUpPage like below or using withProps Route attribute
          // component={(routeProps: RouteComponentProps<{}>) => <SignInPage onSignIn={getUser} {...routeProps} />}
          />

          <AuthRoute
            isAuthenticated={!!currentUser}
            redirectPath="/sign_in"
            exact={true}
            path='/events/new'
            component={EventNewPage}
          />

          <Route exact path="/events/:id" component={EventShowPage} />

          <Route component={NotFoundPage} />
        </Switch>
      </section>
    </BrowserRouter>
  );
}

export default App;
