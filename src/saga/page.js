import {GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, getPhotosSuccess, showNotification as showNotificationAction} from '../actions/PageActions'
import { put, delay, takeEvery, call, all } from 'redux-saga/effects'

function* getPhotos() {
    try {
        yield delay(500);
        yield put(getPhotosSuccess());
    } catch (error) {

    }
}

function* watchNotification() {
    yield takeEvery(GET_PHOTOS_SUCCESS, showNotification)
}

function* showNotification() {
    yield put(showNotificationAction('test'));
    yield delay(2000);
    yield put(showNotificationAction(''));
}

function* watchPhotosRequest() {
    yield takeEvery(GET_PHOTOS_REQUEST, getPhotos)
}

export default function* () {
    yield all([
        call(watchPhotosRequest),
        call(watchNotification)
    ]);
}