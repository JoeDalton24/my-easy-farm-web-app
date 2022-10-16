import axios from "axios";
import { Dispatch } from "react";
import { Action } from "../actions";
import { ActionTypes } from "../actions-types";

const URL = "http://localhost:3000/partfields";

export const fetchField = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.ON_LOAD_FIELD,
    });

    try {
      const { data } = await axios.get(URL);
      dispatch({
        type: ActionTypes.ON_LOAD_FIELD_SUCCESS,
        payload: data.items,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.ON_LOAD_FIELD_ERROR,
        payload: error?.message,
      });
    }
  };
};
