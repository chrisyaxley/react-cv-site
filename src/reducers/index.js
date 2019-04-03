import { combineReducers } from 'redux';
import linksData from './links';
import skillsData from './skills';

const rootReducer = combineReducers({
  linksData,
  skillsData
});

export default rootReducer;
