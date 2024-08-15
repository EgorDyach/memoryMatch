import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { testStateName } from './types';
import { testInitialState } from './constants';

const testSlice = createSlice({
  name: testStateName,
  initialState: testInitialState,
  reducers: {
    setTestKey(state, { payload }: PayloadAction<number[]>) {
      state.testKey = payload;
    },
  },
});

export const { name, reducer, actions } = testSlice;
