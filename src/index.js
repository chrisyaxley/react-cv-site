import React from 'react';
import ReactDOM from 'react-dom';

import ReactGA from 'react-ga';
// import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

// Global CSS Stuff
import './assets/scss/reset.scss';
import './assets/scss/lists.scss';
import './assets/scss/layout.scss';
import './assets/scss/images.scss';
import './assets/scss/typography.scss';
import './assets/scss/buttons.scss';
import './assets/scss/vender/dialog-polyfill.scss';
import './assets/scss/utils/intrinsic-ratios.scss';
import './assets/scss/static/static.scss';

ReactGA.initialize('');
ReactGA.pageview(window.location.pathname + window.location.search);

const rootEl = document.querySelector('.site-root');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App); });
}
