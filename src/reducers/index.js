import { combineReducers } from 'redux';
import linksData from './links';
import skillsData from './skills';
import interestsData from './interests';

const rootReducer = combineReducers({
  linksData,
  skillsData,
  interestsData
});

export default rootReducer;
