export const testStateName = 'testName';

export type TestState = {
  testKey: number[];
};

export type StoreWithTestState = {
  [testStateName]: TestState;
};
