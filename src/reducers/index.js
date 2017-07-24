import { combineReducers } from 'redux';
import youtube from '../reducers/reducer_youtube';
import countdown from '../reducers/reducer_countdown';
import sendcontrol from '../reducers/reducer_control';



const rootReducer = combineReducers({
  youtube,
  countdown,
  sendcontrol
});

export default rootReducer;
