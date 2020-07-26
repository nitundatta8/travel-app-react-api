
import { combineReducers } from 'redux';
import loginReducer from './login-reducer';
import cityReducer from './city-reducer';


const rootReducer = combineReducers({
  user: loginReducer,
  city: cityReducer
})

export default rootReducer