import { takeLatest, put } from "redux-saga/effects";

function* getToDoList() {
    yield put({ type: "TODO_LIST" });
}

function* updateTaskStatus({taskId, newStatus}) {
  yield put({ type: 'TASK_NEW_STATUS', taskId, newStatus });
}

function* addNewTask({title}) {
  yield put({ type: 'NEW_TASK', title});
}

function* deleteTask({taskId}) {
  yield put({ type: 'DELETE_TASK', taskId });
}

export const HomeSage = [
  takeLatest("GET_TODO_LIST", getToDoList),
  takeLatest("UPDATE_TASK_STATUS", updateTaskStatus),
  takeLatest("ADD_NEW_TASK", addNewTask),
  takeLatest("DELETE_TASK_BY_ID", deleteTask)
];
