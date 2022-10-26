import { combineReducers } from 'redux';
import profileReducer from './ducks/profile/profileSlice';
import newsReducer from './ducks/news/newsSlice';
import ModuleNames from './ducks/moduleNames';

const reducer = combineReducers({
  [ModuleNames.profile]: profileReducer,
  [ModuleNames.news]: newsReducer,
});

export default reducer;
