/* global fetch */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'whatwg-fetch';
import NoMatch from './404';
import CV from './CV';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <main>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <CV />
                }
              />
              <Route
                render={props => (
                  <NoMatch
                    {...props}
                  />
                )}
              />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
