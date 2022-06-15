import React from "react";
import { Link } from "react-router-dom";
import AdminLteLogo from "../../../../src/admin_webu/dist/img/AdminLTELogo.png";

function Sidebar(props) {
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="#" className="brand-link">
          <img
            src={AdminLteLogo}
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
          />
          <span className="brand-text font-weight-light">Node Stores</span>
        </Link>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image"></div>
            <div className="info">
              <Link to="#" className="d-block">
                Admin
              </Link>
            </div>
          </div>
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item has-treeview menu-open">
                <Link to="/admin/dashboard" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>Dashboard</p>
                </Link>
              </li>
              <li className="nav-item has-treeview">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-copy"></i>
                  <p>
                    Catalog
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/admin/catalog/categories" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Categories</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/catalog/products" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Products</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/admin/catalog/recurring-profile"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Recurring Profiles</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/catalog/filters" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Filters</p>
                    </Link>
                  </li>
                  <li className="nav-item has-treeview">
                    <Link to="#" className="nav-link">
                      <i className="nav-icon far fa-plus-square"></i>
                      <p>
                        Attributes
                        <i className="fas fa-angle-left right"></i>
                      </p>
                    </Link>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link
                          to="/admin/catalog/attribute"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Attributes</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/admin/catalog/attribute-groups"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon"></i>
                          <p>Attributes Groups</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/catalog/options" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Options</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Manufacturers</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Downloads</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Reviews</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Information</p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item has-treeview">
                <Link to="#" className="nav-link">
                  <i className="nav-icon far fa-envelope"></i>
                  <p>
                    Design
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Layouts</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Theme Editor</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/mailbox/read-mail.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Language Editor</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/mailbox/read-mail.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Banners</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/mailbox/read-mail.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>SEO URL</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-book"></i>
                  <p>
                    SALES
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="pages/examples/invoice.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Orders</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Recurring Orders</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Return</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Gift Vouchers</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <Link to="#" className="nav-link">
                  <i className="nav-icon far fa-plus-square"></i>
                  <p>
                    Customers
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="pages/examples/login.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Customers</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/examples/register.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Customers Groups</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/examples/forgot-password.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Customers Approvals</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/examples/forgot-password.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Custom Fields</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <Link to="#" className="nav-link">
                  <i className="nav-icon far fa-plus-square"></i>
                  <p>
                    Marketing
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="pages/examples/login.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Marketing</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/examples/register.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Coupons</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/examples/forgot-password.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Mail</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/examples/forgot-password.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Google Shopping</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <Link to="#" className="nav-link">
                  <i className="nav-icon far fa-plus-square"></i>
                  <p>
                    Systems
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="pages/examples/login.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Settings</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/examples/register.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Localitions</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/examples/forgot-password.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Maintenance</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <Link to="#" className="nav-link">
                  <i className="nav-icon far fa-plus-square"></i>
                  <p>
                    Reports
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="pages/examples/login.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Reports</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/examples/login.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Who`s Online</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/examples/register.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Statistics</p>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
