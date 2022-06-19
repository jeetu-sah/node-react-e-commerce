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
import Button from "react-bootstrap/Button";
import AlertMsg from "../../../common/AlertMsg";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";

function Create(props) {
  const navigate = useNavigate();
  const [alertMsg, setAlertMsg] = React.useState({
    status: null,
    msg: null,
  });

  const [download, setValues] = React.useState({
    name: "Footwear",
    meta_tag_title: "Footwear",
    meta_tag_description: "Footwear Descriptions",
    meta_tag_keyword: "Footwear keyword",
    parent_category: null,
    stores: 1,
    top: 1,
    columns: 1,
    sort_order: 1,
    status: 1,
    keyword: "Component",
    layout_override: "1994",
    category_files: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...download, [prop]: event.target.value });
  };

  const saveCategoryDetails = (e, props) => {
    e.preventDefault();
    window.$axios
      .post(`${window.$base_url}${window.$api.post.create_category}`, download)
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
                  <h1 className="m-0 text-dark">Downloads</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Create Downloads</li>
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
                      <Link
                        to="/admin/catalog/download"
                        className="btn btn-primary"
                      >
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
                      <h5 className="m-0">Create Downloads</h5>
                    </div>
                    <div className="card-body">
                      <AlertMsg alert={alertMsg} />
                      <Box>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <TextField
                            id="name"
                            value={download.name}
                            onChange={handleChange("name")}
                            label="Download Name"
                          />
                        </FormControl>

                        <FormControl fullWidth sx={{ m: 1 }}>
                          <TextField
                            id="filename"
                            value={download.sort_order}
                            label="filename"
                          />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <TextField
                            id="sort-order"
                            value={download.max}
                            onChange={handleChange("mask")}
                            label="Mask"
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
