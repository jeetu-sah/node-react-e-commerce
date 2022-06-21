import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Autocomplete from "@mui/material/Autocomplete";

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
  const [parentCategoryList, setParentCategoryList] = React.useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log("its working get parent category");
    window.$axios
      .get(`${window.$base_url}${window.$api.get.list_category}`)
      .then((res) => {
        console.log(res.data.response);
        setParentCategoryList(res.data.response);
      })
      .catch(function (error) {
        // handle error
        alert("something went wrong, please try again");
        console.log("error catch");
        console.log(error);
      });
  }, []);

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
    { field: "keyword", headerName: "Keyword" },
  ]);

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Customer Approvals</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="#">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Customer Approvals</li>
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
                    <h5 className="m-0">Customer Approval List</h5>
                  </div>
                  <div className="card-body">
                    <div class="row mb-3">
                      <div className="col-sm-2 mt__2">
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <Autocomplete
                            disablePortal
                            id="customer_name"
                            getOptionLabel={(option) =>
                              option.category_name || ""
                            }
                            options={parentCategoryList}
                            renderInput={(params) => (
                              <TextField {...params} label="Customer Name" />
                            )}
                          />
                        </FormControl>
                      </div>
                      <div className="col-sm-2 mt__2">
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <Autocomplete
                            disablePortal
                            id="email"
                            getOptionLabel={(option) =>
                              option.category_name || ""
                            }
                            options={parentCategoryList}
                            renderInput={(params) => (
                              <TextField {...params} label="Email" />
                            )}
                          />
                        </FormControl>
                      </div>

                      <div className="col-sm-2 mt__2">
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <InputLabel id="demo-simple-select-helper-label">
                            Customer Group
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Customer Group"
                          >
                            <MenuItem value={1}>Default</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className="col-sm-2 mt__2">
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <InputLabel id="demo-simple-select-helper-label">
                            Type
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Type"
                          >
                            <MenuItem value={1}>Customer</MenuItem>
                            <MenuItem value={2}>Affiliate</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className="col-sm-2">
                        <FormControl>
                          <TextField id="email" label="Date Added" />
                        </FormControl>
                      </div>
                      <div className="col-sm-2">
                        <Button variant="success" type="button">
                          <i className="fas fa-save"></i>&nbsp;Filter
                        </Button>
                      </div>
                    </div>
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
