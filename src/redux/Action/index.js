import * as ACTION_TYPE from './types';

//ACTIONS
//For Setting Loading status
export const LoaderAction = (payload) => {
  return { type: ACTION_TYPE.LOADER, payload };
};

//Action For Adding Points to player
export const AddPlayerOneInfoAction = (payload) => {
  // console.log('PAYLOAD ', payload);
  return { type: ACTION_TYPE.ADD_PLAYER_ONE_INFO, payload };
};

//Action For Adding Points to player
export const AddPlayerTwoInfoAction = (payload) => {
  // console.log('PAYLOAD TWO', payload);
  return { type: ACTION_TYPE.ADD_PLAYER_TWO_INFO, payload };
};
