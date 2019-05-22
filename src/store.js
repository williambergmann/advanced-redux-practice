import { createStore } from 'redux';
import state from './state';
import Reducer from './reducers/index';

export default createStore(Reducer, state)