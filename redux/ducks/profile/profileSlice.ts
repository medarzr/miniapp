/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import ModuleNames from '../moduleNames';
import { InitialState } from './profileType';
import profileCompositeActions from './profileCompositeActions';

const initialState: InitialState = {
  profileData: {
    name: 'John',
    lastName: 'Johnson',
    email: 'qwerty@mail.com',
    phone: '+7911929333',
    password: 'qweqwweq',
  },
  loading: false,
};

const profileSlice = createSlice({
  name: ModuleNames.profile,
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
  },
  extraReducers: ((builder) => {
    builder
      .addCase(profileCompositeActions.editProfileData.success, (state, { payload }) => ({
        ...state,
        profileData: payload.data,
      }));
  }),
});

export const {
  setLoading,
} = profileSlice.actions;

export default profileSlice.reducer;
