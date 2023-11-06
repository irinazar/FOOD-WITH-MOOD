import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user/UserSlice';
import authOwnerReducer from './slices/authOwner/authOwnerSlice';
import roleReducer from './slices/role/RoleSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    authOwner: authOwnerReducer,
    role: roleReducer,
  },
});

export default store;
