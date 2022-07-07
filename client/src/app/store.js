import { configureStore } from "@reduxjs/toolkit";
import CustomerReducer from "./services/reducers/CustomerReducer";
import CategoriesReducer from "./services/reducers/CategoriesReducer";

// export default configureStore({
//   reducer: {
//     CustomerReducer,
//   },
// });

const store = configureStore({
  reducer: {
    CustomerReducer,
    CategoriesReducer,
  },
});

export default store;