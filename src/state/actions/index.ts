import { Field } from "~/domain/field/field";
import { ActionTypes } from "../actions-types";

interface OnLoadFieldAction {
  type: ActionTypes.ON_LOAD_FIELD;
}

interface OnLoadFieldSuccessAction {
  type: ActionTypes.ON_LOAD_FIELD_SUCCESS;
  payload: Field[];
}

interface OnLoadFieldErrorAction {
  type: ActionTypes.ON_LOAD_FIELD_ERROR;
  payload: null;
}

export type Action =
  | OnLoadFieldAction
  | OnLoadFieldSuccessAction
  | OnLoadFieldErrorAction;
