import { createStore } from 'redux'

import rootReducer from './rootReducer'

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')): {}
const enhancer = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : null
const store = createStore(
  rootReducer,
  persistedState,
  enhancer
);

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;
