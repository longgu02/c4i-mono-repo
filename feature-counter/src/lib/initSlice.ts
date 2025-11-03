// libs/features/chat/src/lib/initChat.ts
import { injectReducer } from '@c4i-fe/state';
import { counterReducer } from './slice';

export function initSlice() {
  injectReducer('counter', counterReducer);
}
