import { TOGGLE_IS_AUTHENTICATED } from '../Actions/ActionTypes';
import store from '../../Store';

//store.getState()
// const goal = (listOfWorkouts=[], action) =>{

const initialState = { isAthenticated: false };
//                  initial state below //dc later to make sure works if you try an start with true
const isAuthenticatedReducer = (state = { initialState }, action) => {
  switch (action.type) {
    case TOGGLE_IS_AUTHENTICATED:
      return (state = action.payload);
    //   !state.isAthenticated;
    // [...state,action.payload]

    //action.state.payload; try this next

    // (action.payload.isAuth.state);
    default:
      return state;
  }
};

export default isAuthenticatedReducer;
