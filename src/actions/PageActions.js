export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

export function getPhotos() {
  return {
    type: GET_PHOTOS_REQUEST,
    payload: ['год'],
  }
}

export function getPhotosSuccess() {
  return  {
    type: GET_PHOTOS_SUCCESS,
    payload: [1, 2, 3, 4, 5]
  }
}

export function showNotification(text) {
  return  {
    type: SHOW_NOTIFICATION,
    payload: text
  }
}

export function hideNotification(text) {
  return  {
    type: HIDE_NOTIFICATION,
    payload: text
  }
}