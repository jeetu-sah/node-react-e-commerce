import React from "react";
import { Link } from "react-router-dom";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Footer from "./layout/Footer";
import { Routes, Route, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import Categories from "./catalog/categories/Categories";
import CreateCategory from "./catalog/categories/Create";
import ProductsList from "./catalog/products/ProductsList";
import RecuringProfiles from "./catalog/recuring-profiles/RecuringProfiles";
import RecuringProfilesCreate from "./catalog/recuring-profiles/Create";
import Filters from "./catalog/filters/List";
import FiltersCreate from "./catalog/filters/Create";
import AttributeList from "./catalog/attributes/attribute/List";
import AttributeCreate from "./catalog/attributes/attribute/Create";
import AttributeGroupList from "./catalog/attributes/attribute_group/List";
import AttributeGroupCreate from "./catalog/attributes/attribute_group/Create";
import OptionsList from "./catalog/options/List";
import OptionsCreate from "./catalog/options/Create";
import ManufacturerList from "./catalog/manufacturers/List";
import ManufacturerCreate from "./catalog/manufacturers/Create";
import DownloadList from "./catalog/downloads/List";
import DownloadCreate from "./catalog/downloads/Create";
import ReviewList from "./catalog/reviews/List";
import ReviewCreate from "./catalog/reviews/Create";
import InformationCreate from "./catalog/informations/List";
import InformationList from "./catalog/informations/Create";
import DesignLayout from "./layout/design/List";
import DesignLayoutCreate from "./layout/design/Create";
import CustomersList from "./customers/customer/List";
import CustomersCreate from "./customers/customer/Create";

function Admin(props) {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/catalog/categories" element={<Categories />} />
          <Route
            exact
            path="/catalog/categories/create"
            element={<CreateCategory />}
          />

          <Route exact path="/catalog/products" element={<ProductsList />} />
          <Route
            exact
            path="/catalog/recurring-profile"
            element={<RecuringProfiles />}
          />
          <Route
            exact
            path="/catalog/recurring-profile/create"
            element={<RecuringProfilesCreate />}
          />
          <Route exact path="/catalog/filters" element={<Filters />} />
          <Route
            exact
            path="/catalog/filters/create"
            element={<FiltersCreate />}
          />
          <Route exact path="/catalog/attribute" element={<AttributeList />} />
          <Route
            exact
            path="catalog/attribute/create"
            element={<AttributeCreate />}
          />
          <Route
            exact
            path="/catalog/attribute-groups"
            element={<AttributeGroupList />}
          />
          <Route
            exact
            path="/catalog/attribute-groups/create"
            element={<AttributeGroupCreate />}
          />
          <Route exact path="/catalog/options" element={<OptionsList />} />
          <Route
            exact
            path="/catalog/options/create"
            element={<OptionsCreate />}
          />
          <Route
            exact
            path="/catalog/manufacturer"
            element={<ManufacturerList />}
          />
          <Route
            exact
            path="/catalog/manufacturer/create"
            element={<ManufacturerCreate />}
          />
          <Route exact path="/catalog/download" element={<DownloadList />} />
          <Route
            exact
            path="/catalog/download/create"
            element={<DownloadCreate />}
          />
          <Route exact path="/catalog/review" element={<ReviewList />} />
          <Route
            exact
            path="/catalog/review/create"
            element={<ReviewCreate />}
          />
          <Route
            exact
            path="/catalog/information"
            element={<InformationCreate />}
          />
          <Route
            exact
            path="/catalog/information/create"
            element={<InformationList />}
          />
          <Route exact path="/layouts/design" element={<DesignLayout />} />
          <Route
            exact
            path="/layouts/design/create"
            element={<DesignLayoutCreate />}
          />
          <Route exact path="/customers" element={<CustomersList />} />
          <Route exact path="/customers/create" element={<CustomersCreate />} />
          <Route
            exact
            path="/customers/customers-groups"
            element={<CustomersList />}
          />
          <Route
            exact
            path="/customers/customers-approvals"
            element={<CustomersList />}
          />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default Admin;
