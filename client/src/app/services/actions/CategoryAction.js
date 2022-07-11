import {
  CATEGORY_ADD,
  CATEGORY_LIST,
  CATEGORY_UPDATE,
  CATEGORY_DELETE,
} from "../constant";

export const ListCategory = (direction) => ({
  type: CATEGORY_LIST,
});

export const addCategory = (catgory) => ({
  type: CATEGORY_ADD,
  payload: catgory,
});

export const updateCategory = (catgory) => ({
  type: CATEGORY_UPDATE,
  payload: catgory,
});

export const deleteCategory = (catgory) => ({
  type: CATEGORY_DELETE,
  payload: catgory,
});