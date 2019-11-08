import { combineReducers } from "redux";

import business from "../containers/Business/redux/reducer";
import category from "../containers/Category/redux/reducer";
import user from "../containers/Auth/redux/reducers";

const reducers = combineReducers({
  business,
  category,
  user
});

export default reducers;
