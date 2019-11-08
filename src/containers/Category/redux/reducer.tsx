import { RECEIVE_CATEGORY_DATA } from "./types";

const initialState = {
  data: []
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case RECEIVE_CATEGORY_DATA:
      return action.data;
    default:
      return state;
  }
};
