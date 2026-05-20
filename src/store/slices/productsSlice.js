import { createSlice } from "@reduxjs/toolkit";
import { mockProducts } from "../../data/mockData";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: mockProducts,
    searchQuery: "",
    selectedCategory: "All",
    filterStatus: "All",
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push({ ...action.payload, id: Date.now() });
    },
    updateProduct: (state, action) => {
      const idx = state.items.findIndex((p) => p.id === action.payload.id);
      if (idx !== -1) state.items[idx] = action.payload;
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addProduct, updateProduct, deleteProduct, setSearchQuery, setCategory, setFilterStatus } = productsSlice.actions;
export default productsSlice.reducer;
