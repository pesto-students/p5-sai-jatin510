import { ROOM_TOGGLE_LIGHT } from '../actionTypes/actionTypes';

export interface IRoomState {
  isRoomLightOn: boolean;
}
const initialState: IRoomState = {
  isRoomLightOn: true,
};

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROOM_TOGGLE_LIGHT:
      return {
        ...state,
        isRoomLightOn: !state.isRoomLightOn,
      };

    default:
      return state;
  }
};

export default roomReducer;
