import { createSlice } from "@reduxjs/toolkit";

export const CategoriesReducer = createSlice({
  name: "category",
  initialState: {
    categories: [
      { name: "Jitendra Sahu", id: 1 },
      { name: "Aman Sahu", id: 2 },
      { name: "Mahendra Sahu", id: 3 },
      { name: "Mahendra Sahu", id: 4 },
    ],
    parentCategories: [
      { name: "Jitendra Sahu", id: 1 },
      { name: "Aman Sahu", id: 2 },
      { name: "Mahendra Sahu", id: 3 },
      { name: "Mahendra Sahu", id: 4 },
    ],
  },
  reducers: {
    categoryList: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
       state.categoryList = [
        { name: "Jitendra Sahu", id: 1 },
        { name: "Aman Sahu", id: 2 },
        { name: "Mahendra Sahu", id: 3 },
        { name: "Mahendra Sahu", id: 4 },
      ];
      return state;
    },
    categoryDetail: () => {
      console.log("customer details");
      return { name: "Jitendra Sahu", id: 1 };
    },
    addCategory: () => {
      console.log("Add customer List");
    },
  },
});

// Action creators are generated for each case reducer function
export const { categoryList, categoryDetail, addCategory } = CategoriesReducer.actions;
export default CategoriesReducer.reducer;
