import { all, takeLatest, put } from 'typed-redux-saga';
import profileCompositeActions from './profileCompositeActions';
import {
  GetUserDataSagaArgs,
} from './profileType';

export function* editProfileSaga({ payload }: GetUserDataSagaArgs) {
  try {
    const { data, callback } = payload;

    yield* put(profileCompositeActions.editProfileData.success({ data }));

    callback();
  } catch (error) {
    console.log('!!!-editProfileSaga ', error);
    yield* put({
      type: profileCompositeActions.editProfileData.error.type,
    });
  }
}

export function* saga() {
  yield all([
    takeLatest(profileCompositeActions.editProfileData.request.type, editProfileSaga),
  ]);
}
