import {takeEvery} from 'redux-saga/effects'
import {createReducer, Creator} from './helper'

export const INIT_APP = '@APP/INIT'

export const initApp = Creator(INIT_APP)

export function* initAppSaga() {
  // ...
}

export function* appWatcherSaga() {
  yield takeEvery(INIT_APP, initAppSaga)
}

const initial = {}

export default createReducer(initial, state => ({}))
