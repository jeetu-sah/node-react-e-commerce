import { createSlice } from "@reduxjs/toolkit";

export const CustomerReducer = createSlice({
  name: "customers",
  initialState: {
    customerList: [
      { name: "Jitendra Sahu", id: 1 },
      { name: "Aman Sahu", id: 2 },
      { name: "Mahendra Sahu", id: 3 },
      { name: "Mahendra Sahu", id: 4 },
    ],
  },
  reducers: {
    cutomerList: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("customer list");
      state.customerList = [
        { name: "Jitendra Sahu", id: 1 },
        { name: "Aman Sahu", id: 2 },
        { name: "Mahendra Sahu", id: 3 },
        { name: "Mahendra Sahu", id: 4 },
      ];
    },
    customerDetail: () => {
      console.log("customer details");
      return { name: "Jitendra Sahu", id: 1 };
    },
    addCustomer: () => {
      console.log("Add customer List");
    },
  },
});

// Action creators are generated for each case reducer function
export const { cutomerList, customerDetail, addCustomer } = CustomerReducer.actions;

export default CustomerReducer.reducer;
