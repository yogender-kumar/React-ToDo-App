import { takeLatest, put } from "redux-saga/effects";


const seedData = [
    {
      id: 0,
      label: "Create a to do list",
      status: "ToDo"
    },
    {
      id: 1,
      label: "Chaten status",
      status: "InProgress"
    }
  ]

function* getToDoList() {
    yield put({ type: "TODO_LIST", toDoList: seedData });
}

function* updateTaskStatus({taskId, newStatus}) {
  yield put({ type: 'TASK_NEW_STATUS', taskId, newStatus });
}

export const HomeSage = [
  takeLatest("GET_TODO_LIST", getToDoList),
  takeLatest("UPDATE_TASK_STATUS", updateTaskStatus)
];
