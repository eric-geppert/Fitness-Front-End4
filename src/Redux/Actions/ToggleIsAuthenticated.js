import { TOGGLE_IS_AUTHENTICATED } from './ActionTypes';

export const ToggleIsAuthenticated = isAuthenticated => dispatch => {
  dispatch({
    type: TOGGLE_IS_AUTHENTICATED,
    payload: { isAuthenticated }
  });
};

// const ToggleIsAuthenticated = isAuth => {
//     return {
//       type: TOGGLE_AUTHENTICATED,
//       payload: {
//         isAuthenticated: isAuth
//       }
//     };
//   };

//   export default ToggleIsAuthenticated;
