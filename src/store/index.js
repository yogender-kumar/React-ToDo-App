import { createStore, applyMiddleware } from 'redux';
import sagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';
import Saga from './saga';

const appSagaMiddleware = sagaMiddleware();
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(appSagaMiddleware))
);

appSagaMiddleware.run(Saga);

export default store;