import { createStore } from 'redux';
import stepsReducer from '../reducers/stepReducer';

const store = createStore(stepsReducer);

export default store;
