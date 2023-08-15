import { TODO_TYPES } from "../../types";

const INITIAL_STATE = {
  todoLists: [],
  completedTodoLists: [],
};

let filterTodoList = [];
let filterCompletedTodoList = [];

export default function todoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    //ToDo Add Update Detail
    case TODO_TYPES.ADD_UPDATE_INIT:
      return {
        ...state,
        todoListsLoading: true,
        todoAddSuccess: false,
      };

    case TODO_TYPES.ADD_UPDATE_SUCCESS:
      console.log("state", state, action);
      if (action.label === "Submit") {
        filterTodoList = [action.payload, ...state.todoLists];
      } else {
        const manipulateData =
          action.details === "incomplete"
            ? state.todoLists
            : state.completedTodoLists;

        const replaceData = manipulateData.filter((x) => {
          return x?.id !== action?.payload?.id;
        });
        if (action.details === "incomplete") {
          filterTodoList = [action.payload, ...replaceData];
        } else {
          filterCompletedTodoList = [action.payload, ...replaceData];
        }
      }
      return {
        ...state,
        todoLists: filterTodoList,
        completedTodoLists: filterCompletedTodoList,
        todoListsLoading: false,
        todoAddSuccess: true,
      };

    case TODO_TYPES.ADD_UPDATE_FINISH:
      return {
        ...state,
        todoListsLoading: false,
        todoAddSuccess: false,
      };

    //ToDo Delete
    case TODO_TYPES.DELETE_INIT:
      return {
        ...state,
        todoListsLoading: true,
      };

    case TODO_TYPES.DELETE_SUCCESS:
      if (action.label === "incomplete") {
        filterTodoList = state.todoLists.filter((x) => {
          return x?.id !== action.payload;
        });
      } else {
        filterCompletedTodoList = state.completedTodoLists.filter((x) => {
          return x?.id !== action.payload;
        });
      }

      return {
        ...state,
        todoLists: filterTodoList,
        completedTodoLists: filterCompletedTodoList,
        todoListsLoading: false,
      };

    case TODO_TYPES.DELETE_FINISH:
      return {
        ...state,
        todoListsLoading: false,
      };

    //mark as complete
    case TODO_TYPES.MARK_AS_COMPLETE_INIT:
      return {
        ...state,
        todoListsLoading: true,
      };
    case TODO_TYPES.MARK_AS_COMPLETE_SUCCESS:
      if (action.details === "incomplete") {
        filterTodoList = state.todoLists.filter((x) => {
          return x?.id !== action.payload.id;
        });
        filterCompletedTodoList = [action.payload, ...state.completedTodoLists];
      } else {
        filterCompletedTodoList = state.completedTodoLists.filter((x) => {
          return x?.id !== action.payload.id;
        });
        filterTodoList = [action.payload, ...state.todoLists];
      }

      return {
        ...state,
        todoLists: filterTodoList,
        completedTodoLists: filterCompletedTodoList,
        todoListsLoading: false,
      };

    case TODO_TYPES.MARK_AS_COMPLETE_FINISH:
      return {
        ...state,
        todoListsLoading: false,
      };

    default:
      return {
        ...state,
      };
  }
}
