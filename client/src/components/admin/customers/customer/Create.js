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
import AlertMsg from "./../../../common/AlertMsg";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

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

  const [user, setUserValues] = React.useState({
    customer_group: "default",
    first_name: "Jitendra",
    last_name: "Footwear Descriptions",
    email: "Footwear keyword",
    telephone: "8887603331",
    password: "8887603331",
    newsletter: 1,
    status: 2,
    company: 2,
    website: "https://jswebsolutions.in/",
    tracking_code: "https://jswebsolutions.in/",
    commission: 10,
    tax_id: 10,
    payment_status: 2,
    address: [{ item: 1 }, { item: 1 }],
  });

  const appendAddressField = () => {
    const AddressObject = user.address;
    AddressObject.push({ item: 1 });
    user.address = AddressObject;

    setUserValues({...user, address: AddressObject});
  };

  const handleChange = (prop) => (event) => {
    setUserValues({ ...user, [prop]: event.target.value });
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
      .post(`${window.$base_url}${window.$api.post.create_category}`, user)
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
                  <h1 className="m-0 text-dark">Customers</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Create Customers</li>
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
                      <h5 className="m-0">Create Customer</h5>
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
                            <Tab label="Customer Details" {...a11yProps(0)} />
                            <Tab label="Others" {...a11yProps(1)} />
                            <Tab label="Affiliate Details" {...a11yProps(2)} />
                            <Tab label="Payment Details" {...a11yProps(3)} />
                            <Tab label="Address" {...a11yProps(4)} />
                          </Tabs>
                        </Box>
                        {/* General tab details */}
                        <TabPanel value={activeTab} index={0}>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel id="demo-simple-select-helper-label">
                              Customer Group
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              label="Customer Group"
                              onChange={handleChange("customer_group")}
                            >
                              <MenuItem value={1}>Default</MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField
                              id="first_name"
                              value={user.first_name}
                              onChange={handleChange("first_name")}
                              label="First Name"
                            />
                          </FormControl>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField
                              id="last_name"
                              value={user.last_name}
                              onChange={handleChange("last_name")}
                              label="Last Name"
                            />
                          </FormControl>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField
                              id="email"
                              value={user.email}
                              onChange={handleChange("email")}
                              label="E-Mail"
                              type="email"
                            />
                          </FormControl>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField
                              id="telephone"
                              value={user.telephone}
                              onChange={handleChange("telephone")}
                              label="Telephone"
                              type="number"
                            />
                          </FormControl>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField
                              id="password"
                              value={user.password}
                              onChange={handleChange("password")}
                              label="Password"
                              type="password"
                            />
                          </FormControl>
                        </TabPanel>
                        {/* General tab details End */}
                        <TabPanel value={activeTab} index={1}>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel id="demo-simple-select-helper-label">
                              Newsletter
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              label="Status"
                              onChange={handleChange("status")}
                              value={user.newsletter}
                            >
                              <MenuItem value={1}>Enabled</MenuItem>
                              <MenuItem value={2}>Disabled</MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel id="demo-simple-select-helper-label">
                              Status
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              label="Status"
                              value={user.status}
                              onChange={handleChange("status")}
                            >
                              <MenuItem value={1}>Enabled</MenuItem>
                              <MenuItem value={2}>Disabled</MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel id="demo-simple-select-helper-label">
                              Safe
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
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
                              id="company"
                              value={user.company}
                              onChange={handleChange("company")}
                              label="Company"
                            />
                          </FormControl>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField
                              id="website"
                              value={user.website}
                              onChange={handleChange("website")}
                              label="Website"
                            />
                          </FormControl>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField
                              id="tracking_code"
                              value={user.tracking_code}
                              onChange={handleChange("tracking_code")}
                              label="Tracking Code"
                            />
                          </FormControl>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField
                              id="commission"
                              value={user.commission}
                              onChange={handleChange("commission")}
                              label="Commission"
                            />
                          </FormControl>
                        </TabPanel>
                        {/* payment details tab */}
                        <TabPanel value={activeTab} index={3}>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField
                              id="tax_id"
                              value={user.tax_id}
                              onChange={handleChange("tax_id")}
                              label="Tax ID"
                            />
                          </FormControl>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <FormLabel id="demo-row-radio-buttons-group-label">
                              Payment Method
                            </FormLabel>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                              onChange={handleChange("payment_method")}
                              defaultValue="1"
                            >
                              <FormControlLabel
                                value="1"
                                control={<Radio />}
                                label="Cheque"
                              />
                              <FormControlLabel
                                value="2"
                                control={<Radio />}
                                label="Bank Transfer"
                              />
                              <FormControlLabel
                                value="3"
                                control={<Radio />}
                                label="PayPal"
                              />
                            </RadioGroup>
                          </FormControl>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField
                              id="cheque_payee_name"
                              value={user.cheque_payee_name}
                              onChange={handleChange("cheque_payee_name")}
                              label="Cheque Payee Name"
                            />
                          </FormControl>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel id="demo-simple-select-helper-label">
                              Payment Status
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              label="Payment Status"
                              value={user.payment_status}
                              onChange={handleChange("payment_status")}
                            >
                              <MenuItem value={1}>Enabled</MenuItem>
                              <MenuItem value={2}>Disabled</MenuItem>
                            </Select>
                          </FormControl>
                        </TabPanel>
                        {/* payment details End */}
                        {/* address details tabs*/}
                        <TabPanel value={activeTab} index={4}>
                          <div className="row">
                            <div className="col-sm-2 ml-2 mb-2">
                              <Button
                                variant="success"
                                type="button"
                                onClick={appendAddressField}
                              >
                                <i className="fas fa-plus"></i>
                              </Button>
                            </div>
                          </div>
                          {user.address.map(() => (
                            <div className="row">
                              <div className="col-sm-8">
                                <FormControl fullWidth sx={{ m: 1 }}>
                                  <TextField
                                    id="address"
                                    value={user.keyword}
                                    onChange={handleChange("address")}
                                    label="Address"
                                    multiline
                                    rows={4}
                                  />
                                </FormControl>
                              </div>
                              <div className="col-sm-2">
                                <Button variant="danger" type="button">
                                  <i className="fas fa-minus"></i>
                                </Button>
                              </div>
                            </div>
                          ))}
                        </TabPanel>

                        {/* address details tabs End*/}
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
