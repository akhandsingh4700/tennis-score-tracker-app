import { combineReducers } from 'redux';
import * as ActionType from '../Action/types';

const initialState = {
  loading: false,
  playerOneInfo: {
    name: '',
    points: ''
  },
  playerTwoInfo: {
    name: '',
    points: ''
  }
};

//Common Reducer function
export const Reducer = (state = initialState, action) => {
  // console.log('ACTIONS ', action.payload);
  switch (action.type) {
    case ActionType.ADD_PLAYER_ONE_INFO:
      return {
        ...state,
        case: action.type,
        message: action.message,
        playerOneInfo: action.payload
          ? action.payload
          : initialState.playerOneInfo
      };
    case ActionType.ADD_PLAYER_TWO_INFO:
      return {
        ...state,
        case: action.type,
        message: action.message,
        playerTwoInfo: action.payload
          ? action.payload
          : initialState.playerTwoInfo
      };
    default:
      return {
        ...state,
        case: action.type,
        message: action.message,
        playerTwoInfo: {}
      };
  }
};

const rootReducer = combineReducers({ reducer: Reducer });
export default rootReducer;
