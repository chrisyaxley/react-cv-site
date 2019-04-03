import { combineReducers } from 'redux';
import linksData from './links';
import skillsData from './skills';
import interestsData from './interests';
import experienceData from './experience';
import aboutMeData from './aboutMe';

const rootReducer = combineReducers({
  linksData,
  skillsData,
  experienceData,
  interestsData,
  aboutMeData
});

export default rootReducer;
