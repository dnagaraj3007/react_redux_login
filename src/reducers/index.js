import {combineReducers} from 'redux'

import {authentication} from './authentication.reducer';
import {signup} from './signup.reducer';
import {alert} from './alert.reducer'

export default combineReducers({
 	alert,
 	signup, authentication
})