import { ADD_STEP, RESET_STEP } from '../actionTypes/actionTypes';

export interface IStepsState {
  steps: number;
}

const initialState: IStepsState = {
  steps: 0,
};

const StepsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STEP:
      return {
        ...state,
        steps: state.steps + 1,
      };
    case RESET_STEP: {
      return {
        ...state,
        steps: 0,
      };
    }
    default:
      return state;
  }
};

export default StepsReducer;
