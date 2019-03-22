/* global fetch */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'whatwg-fetch';
import DocumentMeta from 'react-document-meta';
import NoMatch from './404';
import CV from './CV';

class App extends Component {
  render() {
    const meta = {
      title: 'Chris Yaxley - A CV',
      description: 'Chris Yaxley, Front end developer London',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'Frontend, developer, london, React, Reactjs'
        }
      }
    };
    return (
      <Router>
        <div>
          <DocumentMeta {...meta} />
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
