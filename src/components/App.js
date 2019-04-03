/* global fetch */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'whatwg-fetch';
import CV from './CV';
import noMatch from './404';
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
              <Route component={noMatch} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
