const createTask = (title, taskList) => {
  let task = {
    label: title,
    status: "ToDo",
    isDeleted: false
  }
  task.id = taskList.length ? (taskList[taskList.length-1].id + 1) : 0;
  return task;
};

export default function HomeReducer(
  state = {
    toDoList: []
  },
  action
) {
  switch (action.type) {
    case "TODO_LIST": {
      return {
        ...state,
        toDoList: action.toDoList || []
      };
    }
    case "TASK_NEW_STATUS": {
      return {
        ...state,
        toDoList: state.toDoList.map(task => {
          if (task.id === action.taskId) {
            task.status = action.newStatus
          }
          return task;
        })
      }
    }
    case "NEW_TASK": {

      console.log(state.toDoList);
      return {
        ...state,
        toDoList: state.toDoList.concat(createTask(action.title, state.toDoList))
      }
    }
    case "DELETE_TASK": {
      return {
        ...state,
        toDoList: state.toDoList.map(task => {
          if(task.id === action.taskId) {
            task.isDeleted = true;
          }
          return task;
        })
      }
    }
    default:
      return state;
  }
}
