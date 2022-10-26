import ModuleNames from '../moduleNames';
import { RootState } from '../generalTypes';

export const profileDataSelector = (state: RootState) => state[ModuleNames.profile].profileData;
export const loadingSelector = (state: RootState) => state[ModuleNames.profile].loading;
