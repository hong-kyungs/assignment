import { configureStore } from '@reduxjs/toolkit';
import itemSlice from '../reducer/itemSlice';

export const store = configureStore({
	reducer: {
		item: itemSlice.reducer,
	},
});
