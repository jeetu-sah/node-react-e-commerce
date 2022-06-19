import React, { useState, useRef, useEffect } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
//import Alert from "@mui/material/Alert";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Button from "react-bootstrap/Button";
import AlertMsg from "./../../../../common/AlertMsg";


function Create(props) {
  const navigate = useNavigate();
  const [alertMsg, setAlertMsg] = React.useState({
    status: null,
    msg: null,
  });

  const [parentCategoryList, setParentCategoryList] = React.useState([]);

  const [attribute, setValues] = React.useState({
    name: "Clockspeed",
    attribute_group: "processor",
    sort_order: 1,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...attribute, [prop]: event.target.value });
  };

  const handleChangeParentCategory = (event) => {
    setValues({ ...attribute, attribute_group: event });
  };

  //get parent category.
  useEffect(() => {
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

  const saveCategoryDetails = (e, props) => {
    e.preventDefault();
    window.$axios
      .post(`${window.$base_url}${window.$api.post.create_category}`, attribute)
      .then((res) => {
        if (res.data.status === 200) {
          setAlertMsg({ status: 200, msg: res.data.msg });

          setTimeout(function () {
            navigate("/admin/catalog/categories");
          }, 1000);
        } else {
          //console if received any other requirements
          console.log("Error of form validation");
        }
      });
  };

  return (
    <>
      <form id="categoryForm">
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Attributes</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Create Attribute</li>
                  </ol>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-12">
                  <ol className="breadcrumb float-sm-right">
                    <li>
                      <Button
                        variant="success"
                        type="button"
                        onClick={saveCategoryDetails}
                      >
                        <i className="fas fa-save"></i>
                      </Button>
                      &nbsp;&nbsp;
                    </li>
                    <li>
                      <Link to="/catalog/attribute" className="btn btn-primary">
                        <i className="fas fa-times"></i>
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
                      <h5 className="m-0">Create Attribute</h5>
                    </div>
                    <div className="card-body">
                      <AlertMsg alert={alertMsg} />
                      <Box>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <TextField
                            id="name"
                            value={attribute.name}
                            onChange={handleChange("name")}
                            label="Attribute Name"
                          />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <Autocomplete
                            disablePortal
                            id="attribute-group"
                            getOptionLabel={(option) =>
                              option.category_name || ""
                            }
                            onChange={(event, value) =>
                              handleChangeParentCategory(value._id)
                            }
                            options={parentCategoryList}
                            renderInput={(params) => (
                              <TextField {...params} label="Attribute Group" />
                            )}
                          />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <TextField
                            id="sort_order"
                            value={attribute.sort_order}
                            onChange={handleChange("sort_order")}
                            label="Sort Order"
                            type="number"
                          />
                        </FormControl>
                      </Box>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Create;
