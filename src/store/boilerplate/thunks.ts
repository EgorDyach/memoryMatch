// import { GenericDispatch, getStoreType } from 'types/store';
// import { requestStatesActions } from 'store/reducers/requestStates';
// import { actions } from './store';
// import { StoreWithTestState } from './types';
// import { getTestKey } from './selectors';
//
// // how to use
// // const dispatch = useDispatch();
// // dispatch(thunks.getSomethings)
// export const getSomethings = async (
//   dispatch: GenericDispatch,
//   getStore: getStoreType<StoreWithTestState>
// ): Promise<void> => {
//   const testKey = getTestKey(getStore());
//   if (testKey.length !== 0) return;
//   dispatch(requestStatesActions.setIsFetching('testKey'));
//   const test = await Promise.resolve([123]);
//   dispatch(actions.setTestKey(test));
//   dispatch(requestStatesActions.setIsFetched('testKey'));
// };
//
// // how to use
// // const dispatch = useDispatch();
// // dispatch(thunks.getSomethingsWithClosure(true))
// export const getSomethingsWithClosure = (shouldFetch: boolean) => {
//   return async (
//     dispatch: GenericDispatch,
//     getStore: getStoreType<StoreWithTestState>
//   ): Promise<void> => {
//     const testKey = getTestKey(getStore());
//     if (testKey.length !== 0 || !shouldFetch) return;
//     dispatch(requestStatesActions.setIsFetching('testKey'));
//     const test = await Promise.resolve([123]);
//     dispatch(actions.setTestKey(test));
//     dispatch(requestStatesActions.setIsFetched('testKey'));
//   };
// };
