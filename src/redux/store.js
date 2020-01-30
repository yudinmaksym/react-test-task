import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducer from './reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    ...reducer,
});

export default function configureStore(initialState) {
    const logger = createLogger()
    const store = createStore( rootReducer, initialState, applyMiddleware(thunk, logger) )
    return store
}