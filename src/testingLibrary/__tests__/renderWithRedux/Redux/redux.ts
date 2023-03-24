import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { createAction } from '../../../../lib/createAction';

interface State {
  person: string;
}

const initialState: State = {
  person: 'Nancy'
};

export const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    changePerson: createAction<string>('person')
  }
});

export const { changePerson } = demoSlice.actions;
export default demoSlice.reducer;