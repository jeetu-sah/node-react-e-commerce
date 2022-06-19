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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Create(props) {
  const navigate = useNavigate();
  const [alertMsg, setAlertMsg] = React.useState({
    status: null,
    msg: null,
  });

  const [activeTab, setValue] = React.useState(0);

  const [filterValueField, setfilterValueField] = React.useState([{ item: 1 }]);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  const [category, setValues] = React.useState({
    category_name: "Footwear",
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
    setValues({ ...category, [prop]: event.target.value });
  };

  const saveCategoryDetails = (e, props) => {
    e.preventDefault();
    window.$axios
      .post(`${window.$base_url}${window.$api.post.create_category}`, category)
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

  const appendFilterValueFields = (e) => {
    if (filterValueField.length < 10) {
      const newFieldSet = { item: filterValueField.length + 1 };
      setfilterValueField([...filterValueField, newFieldSet]);
    } else {
      alert("Field value cant add more than 10.");
    }
  };

  return (
    <>
      <form id="categoryForm">
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Options</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Create Options</li>
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
                        to="/admin/catalog/categories"
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
                      <h5 className="m-0">Create Options</h5>
                    </div>
                    <div className="card-body">
                      <AlertMsg alert={alertMsg} />
                      <Box>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                          <Tabs
                            value={activeTab}
                            onChange={handleChangeTab}
                            aria-label="basic tabs example"
                          >
                            <Tab label="Options" />
                          </Tabs>
                        </Box>
                        <TabPanel value={activeTab} index={0}>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField
                              id="filter_group_name"
                              value={category.category_name}
                              onChange={handleChange("filter_group_name")}
                              label="Filter Group Name"
                            />
                          </FormControl>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField
                              id="sort-order"
                              value={category.sort_order}
                              onChange={handleChange("sort_order")}
                              label="Sort Order"
                            />
                          </FormControl>
                        </TabPanel>
                      </Box>
                      <Box>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                          <Tabs value={activeTab}>
                            <Tab label="Options Values" />
                          </Tabs>
                        </Box>
                        <TabPanel value={activeTab} index={0}>
                          {filterValueField.map(() => (
                            <div class="row">
                              <div class="col-sm-4">
                                <FormControl fullWidth sx={{ m: 1 }}>
                                  <TextField
                                    id="filter_name"
                                    value={category.category_name}
                                    onChange={handleChange("filter_name")}
                                    label="Filter Name"
                                  />
                                </FormControl>
                              </div>
                              <div class="col-sm-4">
                                <FormControl fullWidth sx={{ m: 1 }}>
                                  <TextField
                                    id="sort_order"
                                    value={category.category_name}
                                    onChange={handleChange("sort_order")}
                                    label="Sort Order"
                                  />
                                </FormControl>
                              </div>
                              <div class="col-sm-4">
                                <FormControl sx={{ m: 1 }}>
                                  <Button variant="danger" type="button">
                                    <i className="fas fa-minus"></i>
                                  </Button>
                                </FormControl>
                              </div>
                            </div>
                          ))}

                          <div class="row">
                            <div class="col-sm-4">
                              <FormControl sx={{ m: 1 }}>
                                <Button
                                  variant="success"
                                  type="button"
                                  onClick={appendFilterValueFields}
                                >
                                  <i className="fas fa-plus"></i>
                                </Button>
                              </FormControl>
                            </div>
                          </div>
                        </TabPanel>
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
