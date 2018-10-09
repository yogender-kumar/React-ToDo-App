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
          toDoList: action.toDoList
        };
      }
      case "TASK_NEW_STATUS": {
        return{
          ...state,
          toDoList: state.toDoList.map(task => {
            if(task.id === action.taskId){
              task.status = action.newStatus
            }
            return task;
          })
        }
      }
      default:
        return state;
    }
  }
  