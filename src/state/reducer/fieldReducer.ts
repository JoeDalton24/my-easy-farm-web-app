import { Field } from "~/domain/field/field";
import { Action } from "../actions";
import { ActionTypes } from "../actions-types";

interface FieldReducer {
  loading: boolean;
  error: null | string;
  fields: Field[] | undefined;
}

export const fieldReducer = (
  state: FieldReducer = { loading: false, error: null, fields: [] },
  actions: Action
): FieldReducer => {
  switch (actions.type) {
    case ActionTypes.ON_LOAD_FIELD:
      return { ...state, loading: true };
    case ActionTypes.ON_LOAD_FIELD_SUCCESS:
      return { loading: false, error: null, fields: actions.payload };
    case ActionTypes.ON_LOAD_FIELD_ERROR:
      return { loading: false, error: actions.payload, fields: undefined };
    default:
      return { ...state };
  }
};
