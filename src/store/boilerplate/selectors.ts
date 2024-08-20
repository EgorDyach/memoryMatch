import { TestState, testStateName, StoreWithTestState } from './types';

const getState = (store: StoreWithTestState): TestState => store[testStateName];

export const getTestKey = (s: StoreWithTestState): number[] =>
  getState(s).testKey;
