import { PayloadAction } from '@reduxjs/toolkit';

export type InitialState = {
  news: null | NewsResponse[],
  loading: boolean,
};

export type GetNewsPayload = {
  request: void
  success: {
    data: NewsResponse[]
  }
  error: void
};

export type NewsResponse = {
  userId: number,
  id: number,
  title: string,
  body: string,
};

export type GetNewsSagaArgs = PayloadAction<GetNewsPayload['request']>;
