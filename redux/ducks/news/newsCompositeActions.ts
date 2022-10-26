import createCompositeAction from '../createCompositeAction';
import ModuleNames from '../moduleNames';
import { GetNewsPayload } from './newsType';

const getNewsData = createCompositeAction<
GetNewsPayload['request'],
GetNewsPayload['success'],
GetNewsPayload['error']
>(ModuleNames.news, 'getNewsData');

const newsCompositeActions = {
  getNewsData,
};

export default newsCompositeActions;
