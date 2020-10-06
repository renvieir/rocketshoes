import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')): {}

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = process.env.NODE_ENV === 'development' ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] : compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
)

const store = createStore(
  rootReducer,
  persistedState,
  enhancer
);

sagaMiddleware.run(rootSaga)

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;
