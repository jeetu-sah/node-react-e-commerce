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
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

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
  const [fieldValueType, setfieldValueType] = React.useState(1);
 
  const [customField, setValues] = React.useState({
    name: "",
    location: "account",
    type: "",
    type_value: "",
    type_value_validation: "",
    customer_group: "default",
    required: 1,
    sort_order: 1,
    status: "enabled",
    category_files: "",
    custom_field_value: [
      { id: 1, name: "Red", sort_order: 2 },
      { id: 1, name: "Yellow", sort_order: 1 },
    ],
  });

  const appendFilterValueFields = (e) => {
    const customFieldValueObject = customField.custom_field_value;
    if (customFieldValueObject.length < 10) {
      customFieldValueObject.unshift({
        id: customFieldValueObject.length + 1,
        name: "",
        sort_order: customFieldValueObject.length + 1,
      });
      setValues({ ...customField, custom_field_value: customFieldValueObject });
    } else {
      alert("Field value cant add more than 10.");
    }
  };

  const removeCustomFieldValue = (i) => {
    const customFieldValueObject = customField.custom_field_value;
    customFieldValueObject.splice(i, 1);
    setValues({
      ...customField,
      custom_field_value: customFieldValueObject,
    });
  };

  const handleChangeCustomFieldValue = (type, value, searchIndex) => {
    const customFieldValueObject = customField.custom_field_value;
    let returnResponse = customFieldValueObject[searchIndex];
    returnResponse = { ...returnResponse, [type]: value };
    customFieldValueObject.splice(searchIndex, 1);
    customFieldValueObject.splice(searchIndex, 0, returnResponse); // n is declared and is the index where to add the object
    setValues({
      ...customField,
      custom_field_value: customFieldValueObject,
    });
    console.log(customField);
  };

  const showCustomFieldsValue = ()=>{
      if (fieldValueType == 1) {
        return (
          <Box>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={activeTab}>
                <Tab label="Custom Field Values" />
              </Tabs>
            </Box>
            <TabPanel value={activeTab} index={0}>
              <div className="row">
                <div className="col-sm-4">
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
              {customField.custom_field_value.map((item, i) => (
                <div className="row" key={i}>
                  <div className="col-sm-4">
                    <FormControl fullWidth sx={{ m: 1 }}>
                      <TextField
                        id="custom_field_value_name"
                        value={item.name}
                        onChange={(e) => {
                          handleChangeCustomFieldValue(
                            "name",
                            e.target.value,
                            i
                          );
                        }}
                        label="Custom Field Value Name"
                      />
                    </FormControl>
                  </div>
                  <div className="col-sm-4">
                    <FormControl fullWidth sx={{ m: 1 }}>
                      <TextField
                        value={item.sort_order}
                        id="sort_order"
                        onChange={(e) => {
                          handleChangeCustomFieldValue(
                            "sort_order",
                            e.target.value,
                            i
                          );
                        }}
                        label="Sort Order"
                      />
                    </FormControl>
                  </div>
                  <div className="col-sm-4">
                    <FormControl sx={{ m: 1 }}>
                      <Button
                        variant="danger"
                        type="button"
                        onClick={(e) => {
                          removeCustomFieldValue(i);
                        }}
                      >
                        <i className="fas fa-minus"></i>
                      </Button>
                    </FormControl>
                  </div>
                </div>
              ))}
            </TabPanel>
          </Box>
        );
      }
  }

  const typeValueWithValidation = () => {
    
      if(fieldValueType == 0){
         return (
           <>
             <FormControl fullWidth sx={{ m: 1 }}>
               <TextField
                 id="type_value"
                 value={customField.type_value}
                 onChange={handleChange("type_value")}
                 label="Value"
               />
             </FormControl>
             <FormControl fullWidth sx={{ m: 1 }}>
               <TextField
                 id="type_value_validation"
                 value={customField.type_value_validation}
                 onChange={handleChange("type_value_validation")}
                 label="Validation"
               />
             </FormControl>
           </>
         );
      }
  }

  const changeLocation = (locationValue) => {
    //update the location value
    setValues({ ...customField, location: locationValue });
  };

  const handleChangeType = (typeValue) => {
    //update the type value
    setValues({ ...customField, type:typeValue});
    if ((typeValue == "select") || (typeValue == "radio") || (typeValue == "checkbox")) {
      setfieldValueType(1);
    }else{
      setfieldValueType(0);
    }
  };

  const handleChangeStatus = (statusValue) => {
    //update the type value
    setValues({ ...customField, status: statusValue });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...customField, [prop]: event.target.value });
  };

  const saveCategoryDetails = (e, props) => {
    e.preventDefault();
    window.$axios
      .post(
        `${window.$base_url}${window.$api.post.create_category}`,
        customField
      )
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
                  <h1 className="m-0 text-dark">Custom Fields</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Custom Fields</li>
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
                        to="/admin/catalog/manufacturer"
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
                      <h5 className="m-0">Add Custom Field</h5>
                    </div>
                    <div className="card-body">
                      <AlertMsg alert={alertMsg} />
                      <Box>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <TextField
                            id="name"
                            value={customField.name}
                            onChange={handleChange("custom_field_name")}
                            label="Custom Field Name"
                          />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <InputLabel id="demo-simple-select-helper-label">
                            Location
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Location"
                            value={customField.location}
                            onChange={(e) => {
                              changeLocation(e.target.value);
                            }}
                          >
                            <MenuItem value="account">Account</MenuItem>
                            <MenuItem value="address">Address</MenuItem>
                            <MenuItem value="affiliate">Affiliate</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <InputLabel id="demo-simple-select-helper-label">
                            Type
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Type"
                            value={customField.type}
                            onChange={(e) => {
                              handleChangeType(e.target.value);
                            }}
                          >
                            <MenuItem value="select">Select</MenuItem>
                            <MenuItem value="radio">Radio</MenuItem>
                            <MenuItem value="checkbox">Checkbox</MenuItem>
                            <MenuItem value="text">Text</MenuItem>
                            <MenuItem value="textarea">Textarea</MenuItem>
                            <MenuItem value="file">File</MenuItem>
                            <MenuItem value="data">Date</MenuItem>
                            <MenuItem value="time">Time</MenuItem>
                            <MenuItem value="date_time">Date & Time</MenuItem>
                          </Select>
                        </FormControl>
                        {typeValueWithValidation()}
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <b>Customer Group</b>
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <FormGroup>
                            <FormControlLabel
                              control={<Checkbox defaultChecked />}
                              label="Default"
                              value={customField.customer_group}
                            />
                          </FormGroup>
                        </FormControl>

                        <FormControl fullWidth sx={{ m: 1 }}>
                          <FormGroup>
                            <FormControlLabel
                              control={<Checkbox defaultChecked />}
                              label="Required"
                              value={customField.stores}
                            />
                          </FormGroup>
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <InputLabel id="demo-simple-select-helper-label">
                            Status
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Status"
                            onChange={(e) => {
                              handleChangeStatus(e.target.value);
                            }}
                            value={customField.status}
                          >
                            <MenuItem value="enabled">Enabled</MenuItem>
                            <MenuItem value="disabled">Disabled</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <TextField
                            id="sort-order"
                            value={customField.sort_order}
                            onChange={handleChange("sort_order")}
                            label="Sort Order"
                            type="number"
                          />
                        </FormControl>
                      </Box>
                      {showCustomFieldsValue()}
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
