import {combineReducers} from 'redux'
import {all} from 'redux-saga/effects'

import app, {appWatcherSaga} from './app'

export const reducers = combineReducers({app})

export function* rootSaga() {
  yield all([appWatcherSaga()])
}
