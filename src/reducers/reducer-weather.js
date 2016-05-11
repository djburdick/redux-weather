import { GET_WEATHER } from '../actions/index';

export default function(state = [], action) {

  console.log(action.type);
  switch(action.type) {
  case GET_WEATHER:
    return [ action.payload.data, ...state ];
  }

  return state;
}
