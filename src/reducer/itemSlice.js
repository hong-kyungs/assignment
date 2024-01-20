import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const initialState = {
	items: [],
	totalQuantity: 0,
	totalPrice: 0,
	loadItemsLoading: false,
	loadItemsDone: false,
	loadItemsError: null,
};

export const loadItems = createAsyncThunk('item/loadItems', async () => {
	const response = await axios.get('http://localhost:3001/items');
	return response.data;
});

const itemSlice = createSlice({
	name: 'item',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			let idx = state.items.findIndex((item) => item.id === action.payload);
			if (
				idx !== -1 &&
				(state.items[idx].count < 1000 || state.totalQuantity < 1000)
			) {
				state.items[idx].count++;
				state.items[idx].newPrice =
					state.items[idx].price * state.items[idx].count;
				state.totalQuantity = state.totalQuantity + 1;
				state.totalPrice = state.totalPrice + state.items[idx].price;
			}
		},
		removeFromCart: (state, action) => {
			let idx = state.items.findIndex((item) => item.id === action.payload);
			if (idx !== -1 && state.items[idx].count >= 1) {
				state.items[idx].count--;
				state.items[idx].newPrice =
					state.items[idx].price * state.items[idx].count;
				state.totalQuantity = state.totalQuantity - 1;
				state.totalPrice = state.totalPrice - state.items[idx].price;
			}
		},
		loadList: (state, action) => {
			state.cart = action.payload;
			state.loading = true;
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(loadItems.pending, (state) => {
				state.loadItemsLoading = true;
				state.loadItemsDone = false;
				state.loadItemsError = null;
			})
			.addCase(loadItems.fulfilled, (state, action) => {
				state.loadItemsLoading = false;
				state.loadItemsDone = true;
				state.items = action.payload.map((item) => ({
					...item,
					count: 0,
					newPrice: 0,
				}));
			})
			.addCase(loadItems.rejected, (state, action) => {
				state.loadItemsLoading = false;
				state.loadItemsError = action.error;
			}),
});

export const { addToCart, removeFromCart } = itemSlice.actions;
export default itemSlice;
