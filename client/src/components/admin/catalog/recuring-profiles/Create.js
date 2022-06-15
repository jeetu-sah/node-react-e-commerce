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
  const [parentCategoryList, setParentCategoryList] = React.useState([]);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  const [recurring, setValues] = React.useState({
    name: "Demo recurring Name",
    price: 0,
    duration: 0,
    cycle: 1,
    frequency: null,
    status: 1,
    trial_price: 0,
    trial_duration: 0,
    trial_cycle: 1,
    trial_frequency: 1,
    trial_status: 1,
    sort_order: 0,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...recurring, [prop]: event.target.value});
  };

  const handleChangeLayoutOverride = (event) => {
    setValues({ ...recurring, layout_override: event.year});
  };

  const handleChangeParentCategory = (event) => {
    setValues({ ...recurring, parent_category: event});
  };

  //get parent category.
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

  const saveCategoryDetails = (e, props) => {
    e.preventDefault();
    window.$axios
      .post(`${window.$base_url}${window.$api.post.create_category}`, recurring)
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
                  <h1 className="m-0 text-dark">Recurring Profiles</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      Create Recurring Profiles
                    </li>
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
                      <h5 className="m-0">Add Recurring Profile</h5>
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
                            <Tab label="General" {...a11yProps(0)} />
                            <Tab label="Recurring Profile" {...a11yProps(1)} />
                            <Tab label="Trial Profile" {...a11yProps(2)} />
                          </Tabs>
                        </Box>
                        <TabPanel value={activeTab} index={0}>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField
                              id="name"
                              value={recurring.name}
                              onChange={handleChange("name")}
                              label="Name"
                            />
                          </FormControl>
                        </TabPanel>
                        <TabPanel value={activeTab} index={1}>
                          <FormGroup>
                            <FormControl fullWidth sx={{ m: 1 }}>
                              <TextField
                                id="price"
                                value={recurring.price}
                                onChange={handleChange("price")}
                                type="number"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                label="Price"
                              />
                            </FormControl>
                          </FormGroup>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField
                              id="Duration"
                              value={recurring.duration}
                              onChange={handleChange("duration")}
                              label="Duration"
                              type="number"
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                          </FormControl>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField
                              id="cycle"
                              value={recurring.cycle}
                              onChange={handleChange("cycle")}
                              label="Cycle"
                              type="number"
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                          </FormControl>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel id="demo-simple-select-helper-label">
                              Frequency
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={recurring.status}
                              label="Frequency"
                              onChange={handleChange("status")}
                            >
                              <MenuItem value={1}>Day</MenuItem>
                              <MenuItem value={2}>Week</MenuItem>
                              <MenuItem value={3}>Semi month</MenuItem>
                              <MenuItem value={4}>Month</MenuItem>
                              <MenuItem value={5}>Year</MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel id="demo-simple-select-helper-label">
                              Status
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={recurring.status}
                              label="Status"
                              onChange={handleChange("status")}
                            >
                              <MenuItem value={1}>Enabled</MenuItem>
                              <MenuItem value={2}>Disabled</MenuItem>
                            </Select>
                          </FormControl>
                        </TabPanel>
                        <TabPanel value={activeTab} index={2}>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField
                              id="trial_price"
                              value={recurring.trial_price}
                              onChange={handleChange("trial_price")}
                              label="Trial price"
                            />
                          </FormControl>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField
                              id="trial_duration"
                              value={recurring.frequency}
                              onChange={handleChange("trial_duration")}
                              label="Trial duration"
                              type="Number"
                            />
                          </FormControl>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField
                              id="trial_cycle"
                              value={recurring.keyword}
                              onChange={handleChange("keyword")}
                              label="Trial cycle"
                              type="Number"
                            />
                          </FormControl>

                          <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel id="demo-simple-select-helper-label">
                              Trial frequency
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={recurring.status}
                              label="Trial frequency"
                              onChange={handleChange("status")}
                            >
                              <MenuItem value={1}>Day</MenuItem>
                              <MenuItem value={2}>Week</MenuItem>
                              <MenuItem value={3}>Semi month</MenuItem>
                              <MenuItem value={4}>Month</MenuItem>
                              <MenuItem value={5}>Year</MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel id="demo-simple-select-helper-label">
                              Trial status
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={recurring.status}
                              label="Trial status"
                              onChange={handleChange("status")}
                            >
                              <MenuItem value={1}>Enabled</MenuItem>
                              <MenuItem value={2}>Disabled</MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField
                              id="sort_order"
                              value={recurring.keyword}
                              onChange={handleChange("keyword")}
                              label="Sort Order"
                            />
                          </FormControl>
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
