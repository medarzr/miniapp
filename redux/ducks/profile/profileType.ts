import { PayloadAction } from '@reduxjs/toolkit';

export type InitialState = {
  profileData: null | UserProfileResponse,
  loading: boolean,
};

export type EditProfilePayload = {
  request: {
    data: {
      name: string,
      lastName: string,
      email:string,
      phone: string,
      password: string,
    },
    callback(): void
  }
  success: {
    data: UserProfileResponse
  }
  error: void
};

export type UserProfileResponse = {
  email: string,
  name: string,
  lastName: string,
  phone: string,
  password: string,
};

export type GetUserDataSagaArgs = PayloadAction<EditProfilePayload['request']>;
