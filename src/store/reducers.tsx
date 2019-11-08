import { combineReducers } from "redux";

import business from "../containers/Business/redux/reducer";
import category from "../containers/Category/redux/reducer";

const reducers = combineReducers({
  business,
  category
});

export default reducers;
