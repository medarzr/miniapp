import {
  all, takeLatest, call, put,
} from 'typed-redux-saga';
import newsCompositeActions from './newsCompositeActions';
import api from '../../../api';
import {
  NewsResponse,
} from './newsType';

export function* getNewsSaga() {
  try {
    const { data }: { data: NewsResponse[] } = yield* call(api.getPosts);
    yield* put(newsCompositeActions.getNewsData.success({ data }));
  } catch (error) {
    console.log('!!!-getNewsSaga ', error);
    yield* put({
      type: newsCompositeActions.getNewsData.error.type,
    });
  }
}

export function* saga() {
  yield all([
    takeLatest(newsCompositeActions.getNewsData.request.type, getNewsSaga),
  ]);
}
