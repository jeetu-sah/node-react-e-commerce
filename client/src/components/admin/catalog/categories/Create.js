import React from "react";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";


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

  const [activeTab, setValue] = React.useState(0);
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  const [values, setValues] = React.useState({
    category_name: null,
    meta_tag_title: null,
    meta_tag_description: null,
    meta_tag_keyword: null,
    parent_category: null,
    stores: false,
    top: false,
    columns: 1,
    sort_order: 1,
    status: false,
    layour_override: false,
  });

  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
      label: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { label: "The Good, the Bad and the Ugly", year: 1966 },
    { label: "Fight Club", year: 1999 },
    {
      label: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
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
    { label: "City of God", year: 2002 },
    { label: "Se7en", year: 1995 },
    { label: "The Silence of the Lambs", year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: "Life Is Beautiful", year: 1997 },
    { label: "The Usual Suspects", year: 1995 },
    { label: "Léon: The Professional", year: 1994 },
    { label: "Spirited Away", year: 2001 },
    { label: "Saving Private Ryan", year: 1998 },
    { label: "Once Upon a Time in the West", year: 1968 },
    { label: "American History X", year: 1998 },
    { label: "Interstellar", year: 2014 },
    { label: "Casablanca", year: 1942 },
    { label: "City Lights", year: 1931 },
    { label: "Psycho", year: 1960 },
    { label: "The Green Mile", year: 1999 },
    { label: "The Intouchables", year: 2011 },
    { label: "Modern Times", year: 1936 },
    { label: "Raiders of the Lost Ark", year: 1981 },
    { label: "Rear Window", year: 1954 },
    {
      label:
        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      year: 1964,
    }
  ];

  const [age, setAge] = React.useState("");
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

 

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Categories</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="#">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Create Categories</li>
                </ol>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-12">
                <ol className="breadcrumb float-sm-right">
                  <li>
                    <Link
                      to="/admin/catalog/categories"
                      className="btn btn-primary"
                    >
                      <i className="fas fa-list"></i>
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
                    <h5 className="m-0">Create Category</h5>
                  </div>
                  <div className="card-body">
                    <Box>
                      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                          value={activeTab}
                          onChange={handleChangeTab}
                          aria-label="basic tabs example"
                        >
                          <Tab label="General" {...a11yProps(0)} />
                          <Tab label="Data" {...a11yProps(1)} />
                          <Tab label="SEO" {...a11yProps(2)} />
                          <Tab label="Design" {...a11yProps(3)} />
                        </Tabs>
                      </Box>
                      <TabPanel value={activeTab} index={0}>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <TextField
                            id="category-name"
                            value={values.amount}
                            onChange={handleChange("amount")}
                            label="Category Name"
                          />
                        </FormControl>

                        <FormControl fullWidth sx={{ m: 1 }}>
                          <TextField
                            id="meta-tag-title"
                            value={values.amount}
                            onChange={handleChange("amount")}
                            label="Meta Tag Title"
                          />
                        </FormControl>

                        <FormControl fullWidth sx={{ m: 1 }}>
                          <TextField
                            id="meta-tag-description"
                            value={values.amount}
                            onChange={handleChange("amount")}
                            label="Meta Tag Description"
                            multiline
                            rows={4}
                          />
                        </FormControl>

                        <FormControl fullWidth sx={{ m: 1 }}>
                          <TextField
                            id="meta-tag-keywords"
                            value={values.amount}
                            onChange={handleChange("amount")}
                            label="Meta Tag Keywords"
                            multiline
                            rows={4}
                          />
                        </FormControl>
                      </TabPanel>
                      <TabPanel value={activeTab} index={1}>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <Autocomplete
                            disablePortal
                            id="parent-category"
                            options={top100Films}
                            renderInput={(params) => (
                              <TextField {...params} label="Parent Category" />
                            )}
                          />
                        </FormControl>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="stores"
                          />
                        </FormGroup>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Top"
                          />
                        </FormGroup>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <TextField
                            id="columns"
                            value={values.amount}
                            onChange={handleChange("amount")}
                            label="Columns"
                          />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <TextField
                            id="sort-order"
                            value={values.amount}
                            onChange={handleChange("amount")}
                            label="Sort Order"
                          />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <InputLabel id="demo-simple-select-helper-label">
                            Status
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={age}
                            label="Status"
                            onChange={handleChangeAge}
                          >
                            <MenuItem value={1}>Enabled</MenuItem>
                            <MenuItem value={2}>Disabled</MenuItem>
                          </Select>
                        </FormControl>
                      </TabPanel>
                      <TabPanel value={activeTab} index={2}>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <TextField
                            id="columns"
                            value={values.amount}
                            onChange={handleChange("amount")}
                            label="keywords"
                          />
                        </FormControl>
                      </TabPanel>
                      <TabPanel value={activeTab} index={3}>
                        <FormControl fullWidth sx={{ m: 1 }}>
                          <Autocomplete
                            disablePortal
                            id="parent-category"
                            options={top100Films}
                            renderInput={(params) => (
                              <TextField {...params} label="Layout Override" />
                            )}
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
    </>
  );
}

export default Create;
