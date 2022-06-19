import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component

// this is a hook, but we work also with classes
function ActionButtonRender(params) {
  console.log(params);
  return (
    <span className="my-renderer">
      <Link to="#" data-action="delete" variant="danger">
        <i class="fas fa-trash"></i>
      </Link>
      &nbsp;&nbsp;
      <Link to="#" data-action="edit" variant="primary">
        <i class="fas fa-edit"></i>
      </Link>
    </span>
  );
}

function List(props) {
  const [rowData, setCategoryList] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log("its working");
    window.$axios
      .get(`${window.$base_url}${window.$api.get.list_category}`)
      .then((res) => {
        setCategoryList(res.data.response);
      })
      .catch(function (error) {
        // handle error
        alert("something went wrong, please try again");
        console.log("error catch");
        console.log(error);
      });
  }, []);

  var checkboxSelection = function (params) {
    // we put checkbox on the name if we are not doing grouping
    return params.columnApi.getRowGroupColumns().length === 0;
  };
  var headerCheckboxSelection = function (params) {
    // we put checkbox on the name if we are not doing grouping
    return params.columnApi.getRowGroupColumns().length === 0;
  };

  const [columnDefs] = useState([
    {
      field: "category_name",
      headerName: "Image",
      checkboxSelection: checkboxSelection,
      headerCheckboxSelection: headerCheckboxSelection,
    },
    { field: "category_name", headerName: "Category Name" },
    { field: "parent_category", headerName: "Parent Category" },
    { field: "keyword", headerName: "Keyword" }
  ]);

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Attribute</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="#">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Attribute page</li>
                </ol>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-12">
                <ol className="breadcrumb float-sm-right">
                  <li>
                    <Link
                      to="/admin/catalog/attribute/create"
                      className="btn btn-primary"
                    >
                      <i className="fas fa-plus"></i>
                    </Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h5 className="m-0">Attribute List</h5>
                  </div>
                  <div className="card-body">
                    <div
                      className="ag-theme-alpine"
                      style={{ height: 400, width: "100%" }}
                    >
                      <AgGridReact
                        rowData={rowData}
                        columnDefs={columnDefs}
                        pagination={true}
                        paginationAutoPageSize={true}
                      ></AgGridReact>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
