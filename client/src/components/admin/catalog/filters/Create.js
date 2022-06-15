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

  const handleChangeLayoutOverride = (event) => {
    setValues({ ...category, layout_override: event.year });
  };

  const handleChangeParentCategory = (event) => {
    setValues({ ...category, parent_category: event });
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

  // Top 100 films as rated by IMDb users.
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    { label: "The Good, the Bad and the Ugly", year: 1966 },
    { label: "Fight Club", year: 1999 },
    { label: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
    {
      label: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { label: "Forrest Gump", year: 1994 },
    { label: "Inception", year: 2010 },
    {
      label: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
  ];

  return (
    <>
      <form id="categoryForm">
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Filters</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Create Filters</li>
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
                      <h5 className="m-0">Create Filters</h5>
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
                            <Tab label="Filter Group" />
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
                            <Tab label="Filter Values" />
                          </Tabs>
                        </Box>
                        <TabPanel value={activeTab} index={0}>
                          <div class="row">
                            <div class="col-sm-4">
                              <FormControl fullWidth sx={{ m: 1 }}>
                                <TextField
                                  id="category-name"
                                  value={category.category_name}
                                  onChange={handleChange("category_name")}
                                  label="Category Name"
                                />
                              </FormControl>
                            </div>
                            <div class="col-sm-4">
                              <FormControl fullWidth sx={{ m: 1 }}>
                                <TextField
                                  id="category-name"
                                  value={category.category_name}
                                  onChange={handleChange("category_name")}
                                  label="Category Name"
                                />
                              </FormControl>
                            </div>
                            <div class="col-sm-4">
                             <FormControl sx={{ m: 1 }}>
                                <Button
                                    variant="success"
                                    type="button"
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
