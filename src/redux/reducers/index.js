import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import car from "./car";

export default combineReducers({
    auth,
    car,
});
