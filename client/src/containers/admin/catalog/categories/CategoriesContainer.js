import { connect } from "react-redux";
import Categories from "../../../../components/admin/catalog/categories/Categories";
import {
  ListCategory,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../../../../app/services/actions/CategoryAction";

const mapStateToProps = (state) => ({
  data: state.CategoriesReducer,
});

const mapDispatchToProps = (dispatch) => ({
  ListCategoryHandler: (data) => dispatch(ListCategory()),
  AddCategoryHandler: (data) => dispatch(addCategory()),
  UpdateCategoryHandler: (data) => dispatch(updateCategory()),
  DeleteCategoryHandler: (data) => dispatch(deleteCategory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
