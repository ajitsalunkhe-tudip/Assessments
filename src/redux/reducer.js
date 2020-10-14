//@flow
import {USERNAME} from './actions';
let dataState = {
  userName: '',
};

const MainReducer = (state: Object = dataState, action: Object) => {
  switch (action.type) {
    case USERNAME:
      let userName = action.data;
      dataState.userName = userName;
      return {...dataState, userName: userName};
    default:
      return dataState;
  }
};

export default MainReducer;
