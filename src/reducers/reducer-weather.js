import { FETCH_WEATHER }  from '../actions/index';

export default function(state = [], action){
  console.log("Action recieved", action)
  switch(action.type){
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ];         // returns a new instance of state instead of mutating it      
  }
  return state
}