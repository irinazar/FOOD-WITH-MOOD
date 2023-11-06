import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AuthRole } from '../../../../types/authType/authTypes';

type RoleState = {
  status: AuthRole;
};
const initialState: RoleState = {
  status: 'user',
};

export const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<AuthRole>) => {
      state.status = action.payload;
    },
  },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
