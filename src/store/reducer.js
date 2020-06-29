import { combineReducers } from 'redux';

import { reducer as loginReducer } from "./login/index";

export default combineReducers({
    login: loginReducer
})