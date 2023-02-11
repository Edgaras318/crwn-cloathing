import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/category.reducer';

export const rooReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
