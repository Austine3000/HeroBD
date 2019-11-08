import { RECEIVE_LOGIN_USER } from "../redux/types";
import isEmpty from "lodash/isEmpty";

const initialState = {
  isAuthenticated: false,
  role: ""
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case RECEIVE_LOGIN_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.data),
        role: action.data.role
      };
    default:
      return state;
  }
};
