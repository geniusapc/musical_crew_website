import Toogle from "./Toogle";
import {EventState,MusicListReducer} from "./LatestMusic";
import { combineReducers } from "redux";

const reducers = combineReducers({
    Toogle,
    MusicListReducer,
    EventState,
});

export default reducers;