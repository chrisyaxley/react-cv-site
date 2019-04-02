import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import api from './middleware/api';
import promise from './middleware/promise';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  api('/api'),
  promise,
  logger,
)(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;
