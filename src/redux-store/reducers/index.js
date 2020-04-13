import Toogle from "./Toogle";
import Music from "./LatestMusic";
import {IntersectionOb} from './IntersectionOb';
import { combineReducers } from "redux";

const reducers = combineReducers({
    Toogle,
    Music,
    IntersectionOb
});

export default reducers;