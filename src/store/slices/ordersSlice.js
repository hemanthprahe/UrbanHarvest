import { createSlice } from "@reduxjs/toolkit";
import { mockOrders, statsData } from "../../data/mockData";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    items: mockOrders,
    stats: statsData,
  },
  reducers: {
    updateOrderStatus: (state, action) => {
      const order = state.items.find((o) => o.id === action.payload.id);
      if (order) order.status = action.payload.status;
    },
  },
});

export const { updateOrderStatus } = ordersSlice.actions;
export default ordersSlice.reducer;
