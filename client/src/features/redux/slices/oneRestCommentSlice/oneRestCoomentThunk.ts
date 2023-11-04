import { createAsyncThunk } from '@reduxjs/toolkit';
import type { CommentType } from '../../../../types/oneRestaurantType/oneRestaurantTypes';
import { getOneRestCommentService } from '../../../../services/oneRestaurantService/oneRestaurantService';

export const getOneRestCommentThunk = createAsyncThunk<CommentType[], number>('restaurant/getComments', async(id: number) => getOneRestCommentService(id).then((data) => data))