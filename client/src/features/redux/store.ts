import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user/UserSlice';
import oneRestaurantReducer from './slices/oneRestaurantSlice/oneRestaurantSlice'
import oneRestCommentsReducer from './slices/oneRestCommentSlice/oneRestaurantCommentSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    oneRestaurant: oneRestaurantReducer,
    oneRestComments: oneRestCommentsReducer,
  },
});

export default store;
