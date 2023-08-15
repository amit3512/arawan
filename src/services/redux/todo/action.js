import { error, finish, init, success } from "../../common";
import { TODO_TYPES } from "../../types";

export const actionForAddUpdateToDo = (data, label, todoType) => {
  return async (dispatch) => {
    console.log("data", data);
    dispatch(init(TODO_TYPES.ADD_UPDATE));
    if (data.label !== "") {
      dispatch(success(TODO_TYPES.ADD_UPDATE, data, label, "", todoType));
      dispatch(finish(TODO_TYPES.ADD_UPDATE));
    } else {
      dispatch(error("No Data to be Added/Updated"));
    }
  };
};

export const actionForDeleteToDo = (id, type) => {
  return async (dispatch) => {
    dispatch(init(TODO_TYPES.DELETE));
    if (id) {
      dispatch(success(TODO_TYPES.DELETE, id, type));
      dispatch(finish(TODO_TYPES.DELETE));
    } else {
      dispatch(error("No Data to be Deleted"));
    }
  };
};

export const actionForMarkAsComplete = (data, todoType) => {
  return async (dispatch) => {
    console.log("data", data, todoType);
    dispatch(init(TODO_TYPES.MARK_AS_COMPLETE));
    if (data) {
      dispatch(success(TODO_TYPES.MARK_AS_COMPLETE, data, "", "", todoType));
      dispatch(finish(TODO_TYPES.MARK_AS_COMPLETE));
    } else {
      dispatch(error("No Data to be Deleted"));
    }
  };
};
