import { combineReducers } from "redux"
import toggleBarReducer from "./toggleBar"
import stepReducer from "./step"
import clientReducer from "./client"

export default combineReducers({
  toggleBarState: toggleBarReducer,
  stepState: stepReducer,
  clientState: clientReducer,
})
