import ModuleNames from '../moduleNames';
import { RootState } from '../generalTypes';

export const newsSelector = (state: RootState) => state[ModuleNames.news].news;
export const loadingSelector = (state: RootState) => state[ModuleNames.news].loading;
