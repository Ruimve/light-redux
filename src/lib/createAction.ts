import { PayloadAction } from '@reduxjs/toolkit';
type State = any;
function createAction<T>(stateKey: string) {
  return (state: State, action: PayloadAction<T>) => {
    state[stateKey] = action.payload;
  }
}
export {
  createAction
}