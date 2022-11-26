import { createStore } from 'redux';
import roomReducer from '../reducers/roomReducer';

const store = createStore(roomReducer);

export { store };
