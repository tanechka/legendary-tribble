import { GET_PHOTOS_REQUEST }from '../actions/PageActions'
import { GET_PHOTOS_SUCCESS } from '../actions/PageActions'
import { SHOW_NOTIFICATION } from '../actions/PageActions'
import { getPhotosSuccess } from '../actions/PageActions'
import { showNotification as showNotificationAction } from '../actions/PageActions'
import { hideNotification as hideNotificationAction } from '../actions/PageActions'

import { put, delay, takeEvery, call, all } from 'redux-saga/effects'

function* getPhotos() {
  yield delay(500);
  yield put(getPhotosSuccess());
}

function* watchNotification() {
  yield takeEvery(GET_PHOTOS_SUCCESS, showNotification);
  yield takeEvery(SHOW_NOTIFICATION, hideNotification)

}

function* showNotification() {
  yield put(showNotificationAction('test'));
}

function* hideNotification() {
  yield delay(2000);
  yield put(hideNotificationAction(''));
}

function* watchPhotosRequest() {
  yield takeEvery(GET_PHOTOS_REQUEST, getPhotos)
}

export default function* () {
  yield all([
    call(watchPhotosRequest),
    call(watchNotification),
  ]);
}