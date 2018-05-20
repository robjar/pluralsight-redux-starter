import { combineReducers } from 'react';
import courses from './coursesReducer';

const rootReducer = combineReducers({
  courses
});

export default rootReducer;