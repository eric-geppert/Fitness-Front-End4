import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './Redux/Reducers/index'; //'./Redux/Reducers/Reducers';
// import goal from '../Reducers/GoalReducer';
// import gym from '../Reducers/GymReducer';
const initialState = { isAuthenticated: false };
//try to add inital state as a second argument here later

// store.subscribe(() => {
//   const state = store.getState();
//   console.log('I dispatched successfully: ', state) //replace with Program.render()
// })
// store.dispatch(updateSelected("gain"));//

const middleware = [thunk];
const store = createStore(
  reducers,
  //initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
