import { all } from 'redux-saga/effects';
import { HomeSage } from '../components/templates/Home/HomeSage';

export default function* Saga() {
    yield all([
        ...HomeSage
    ]);
}