import createCompositeAction from '../createCompositeAction';
import ModuleNames from '../moduleNames';
import { EditProfilePayload } from './profileType';

const editProfileData = createCompositeAction<
EditProfilePayload['request'],
EditProfilePayload['success'],
EditProfilePayload['error']
>(ModuleNames.profile, 'editProfileData');

const profileCompositeActions = {
  editProfileData,
};

export default profileCompositeActions;
