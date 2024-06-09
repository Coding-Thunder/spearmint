import { combineReducers } from "redux";
import positionReducer from "./position/position-reducer";


const rootReducer = combineReducers({
    position:positionReducer
})

export default rootReducer