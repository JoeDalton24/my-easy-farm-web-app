import { useDispatch } from "react-redux";
import { actionsCreators } from "../state";
import { bindActionCreators } from "redux";

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionsCreators, dispatch);
};
