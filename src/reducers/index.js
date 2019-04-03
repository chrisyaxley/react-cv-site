import { combineReducers } from 'redux';
import linksData from './links';
import skillsData from './skills';
import interestsData from './interests';
import experienceData from './experience';

const rootReducer = combineReducers({
  linksData,
  skillsData,
  experienceData,
  interestsData
});

export default rootReducer;
