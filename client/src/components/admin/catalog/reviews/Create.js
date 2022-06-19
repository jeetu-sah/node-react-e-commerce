import React, { useState, useRef, useEffect } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
//import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Button from "react-bootstrap/Button";
import AlertMsg from "../../../common/AlertMsg";
import FormControlLabel from "@mui/material/FormControlLabel";
import Autocomplete from "@mui/material/Autocomplete";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import DatePicker from "react-datepicker";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import "react-datepicker/dist/react-datepicker.css";

function Create(props) {

  const navigate = useNavigate();
  const [alertMsg, setAlertMsg] = React.useState({
    status: null,
    msg: null,
  });
  const [parentCategoryList, setParentCategoryList] = React.useState([]);
  const [startDate, setStartDate] = useState(new Date());

  const [review, setValues] = React.useState({
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
    setValues({ ...review, [prop]: event.target.value });
  };

  const handleChangeParentCategory = (event) => {
    setValues({ ...review, parent_category: event });
  };

  const saveCategoryDetails = (e, props) => {
    e.preventDefault();
    window.$axios
      .post(`${window.$base_url}${window.$api.post.create_category}`, review)
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
                  <h1 className="m-0 text-dark">Reviews</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Create Review</li>
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
                        to="/admin/catalog/review"
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
                      <h5 className="m-0">Create Review</h5>
                    </div>
                    <div className="card-body">
                      <AlertMsg alert={alertMsg} />
                      <Box>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <TextField
                            id="author"
                            value={review.name}
                            onChange={handleChange("author")}
                            label="Author"
                          />
                        </FormControl>

                        <FormControl fullWidth sx={{ m: 1 }}>
                          <Autocomplete
                            disablePortal
                            id="parent-category"
                            getOptionLabel={(option) =>
                              option.category_name || ""
                            }
                            onChange={(event, value) =>
                              handleChangeParentCategory(value._id)
                            }
                            options={parentCategoryList}
                            renderInput={(params) => (
                              <TextField {...params} label="Parent Category" />
                            )}
                          />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <TextField
                            id="Text"
                            value={review.keyword}
                            onChange={handleChange("keyword")}
                            label="Text"
                            multiline
                            rows={4}
                          />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <FormLabel id="demo-row-radio-buttons-group-label">
                            Gender
                          </FormLabel>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                          >
                            <FormControlLabel
                              value="1"
                              control={<Radio />}
                              label="1"
                            />
                            <FormControlLabel
                              value="2"
                              control={<Radio />}
                              label="2"
                            />
                            <FormControlLabel
                              value="3"
                              control={<Radio />}
                              label="3"
                            />
                            <FormControlLabel
                              value="4"
                              control={<Radio />}
                              label="4"
                            />
                            <FormControlLabel
                              value="5"
                              control={<Radio />}
                              label="5"
                            />
                          </RadioGroup>
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <DatePicker
                            selected={startDate}
                            onChange={(date: Date) => setStartDate(date)}
                          />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <InputLabel id="demo-simple-select-helper-label">
                            Status
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={review.status}
                            label="Status"
                            onChange={handleChange("status")}
                          >
                            <MenuItem value={1}>Enabled</MenuItem>
                            <MenuItem value={2}>Disabled</MenuItem>
                          </Select>
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
