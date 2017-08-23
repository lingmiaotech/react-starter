import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import CreateSagaMiddleware from 'redux-saga';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { ConnectedRouter, routerReducer, routerMiddleware as CreateRouterMiddleware, push } from 'react-router-redux';

import { GenerateReducers, GenerateEffects, GenerateSubscriptions, RunSubscriptions } from './engine';
import history from './history';

const reducers = GenerateReducers();

const sagaMiddleware = CreateSagaMiddleware();
const routerMiddleware = CreateRouterMiddleware(history);
const CreateStore = compose(applyMiddleware(sagaMiddleware, routerMiddleware), devToolsEnhancer())(createStore);
const store = CreateStore(combineReducers({...reducers, router: routerReducer}), {});

const effects = GenerateEffects();
sagaMiddleware.run(effects);

RunSubscriptions({dispatch: store.dispatch, history: history});

console.log(history)
//history.emit(history.location.pathname, history.location.query);

export default store;
