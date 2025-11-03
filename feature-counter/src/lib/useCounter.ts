import { useAppDispatch, useAppSelector } from '@c4i-fe/state';
import { increment, decrement } from './slice';

export function useCounter() {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state?.counter?.value);

  return {
    value,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
}
