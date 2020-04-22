import Toogle from "./Toogle";
import { ThemeSwitch } from './Toogle';
import { EventState, MusicListReducer } from "./LatestMusic";
import { combineReducers } from "redux";

const reducers = combineReducers({
    Toogle,
    MusicListReducer,
    EventState,
    ThemeSwitch
});

export default reducers;