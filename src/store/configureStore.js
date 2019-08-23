import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import page from '../saga/page'

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(page);