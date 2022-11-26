import { ADD_STEP, RESET_STEP } from '../actionTypes/actionTypes';

const addStep = () => {
  return {
    type: ADD_STEP,
  };
};

const resetStep = () => {
  return {
    type: RESET_STEP,
  };
};

export { addStep, resetStep };
