import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import people from "./reducers/people";
import filter from "./reducers/filter";

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState) 
  } catch(e) {
    console.log(e)
  }
}

function loadFromLocaltorage() {
  try {
    const serializedState = localStorage.getItem("state")
    if( serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch(e) {
    console.log(e)
    return undefined
  }
}

const persistedState = loadFromLocaltorage()

const rootReducer = combineReducers ({
  people,
  filter
})

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => saveToLocalStorage(store.getState()))


export default store;