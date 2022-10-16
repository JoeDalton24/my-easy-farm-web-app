import { combineReducers } from "redux";
import { fieldReducer } from "./fieldReducer";

export const reducer = combineReducers({
  fields: fieldReducer,
});

export type RootState = ReturnType<typeof reducer>;
