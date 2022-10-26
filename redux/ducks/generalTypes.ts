import reducer from '../reducer';
import store from '../store';

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;

export type ActionWithoutPayload = {
  request: void
  success: void
  error: void
};
