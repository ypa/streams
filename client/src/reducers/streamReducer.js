import _ from 'lodash';
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

// We'll be using object as state for streams and use 
// ES16 key interpolation syntaxto return the new state
// because it'll make our lives a lot 
// simpler with these payloads returned by action creators
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return {...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      // lodash's omit returns a copy of the object without
      // the removed id, it doesn't change the original object
      return _.omit(state, action.payload); // payload for delete action creator is just an id.
    default:
      return state;
  }
}
