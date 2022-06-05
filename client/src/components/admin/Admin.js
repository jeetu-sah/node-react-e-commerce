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
import Filters from  "./catalog/filters/List";
import AttributeList from "./catalog/attributes/attribute/List";
import AttributeGroupList from "./catalog/attributes/attribute_group/List";
import OptionsList from "./catalog/options/List";

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
            element={<CreateCategory/>}
          />

          <Route exact path="/catalog/products" element={<ProductsList />} />
          <Route
            exact
            path="/catalog/recuring-profile"
            element={<RecuringProfiles />}
          />
          <Route exact path="/catalog/filters" element={<Filters />} />
          <Route exact path="/catalog/attribute" element={<AttributeList />} />
          <Route
            exact
            path="/catalog/attribute-groups"
            element={<AttributeGroupList />}
          />
          <Route exact path="/catalog/options" element={<OptionsList />} />
         
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default Admin;
