import { all } from 'typed-redux-saga';
import { saga as profileSaga } from './ducks/profile/profileSaga';
import { saga as newsSaga } from './ducks/news/newsSaga';

export default function* saga() {
  yield* all([
    profileSaga(),
    newsSaga(),
  ]);
}
