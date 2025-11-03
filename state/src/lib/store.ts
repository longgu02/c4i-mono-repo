import { configureStore, combineReducers, Reducer } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

const staticReducers: Record<string, Reducer> = {};

// build root reducer from static + async reducers
const createRootReducer = (asyncReducers: Record<string, Reducer> = {}) => {
  const reducers = { ...staticReducers, ...asyncReducers };

  // combineReducers({}) will throw; return a no-op reducer when there are no reducers yet
  if (Object.keys(reducers).length === 0) {
    return (state: Record<string, any> = {}) => state;
  }

  return combineReducers(reducers);
};

export const store = configureStore({
  reducer: createRootReducer(),
});

// keep async reducers map on the store instance
(store as any).asyncReducers = {};

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const injectReducer = (key: string, reducer: Reducer) => {
  const asyncReducers = (store as any).asyncReducers as Record<string, Reducer>;
  if (asyncReducers[key]) return; // already injected
  asyncReducers[key] = reducer;
  (store as any).asyncReducers = asyncReducers;
  store.replaceReducer(createRootReducer(asyncReducers));
};
