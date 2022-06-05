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
          <nav class="mt-2">
            <ul
              class="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li class="nav-item has-treeview menu-open">
                <Link to="/admin/dashboard" class="nav-link active">
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <p>Dashboard</p>
                </Link>
              </li>
              <li class="nav-item has-treeview">
                <Link to="#" class="nav-link">
                  <i class="nav-icon fas fa-copy"></i>
                  <p>
                    Catalog
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </Link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <Link to="/admin/catalog/categories" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Categories</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/admin/catalog/products" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Products</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/admin/catalog/recuring-profile" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Recurring Profiles</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/admin/catalog/filters" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Filters</p>
                    </Link>
                  </li>
                  <li class="nav-item has-treeview">
                    <Link to="#" class="nav-link">
                      <i class="nav-icon far fa-plus-square"></i>
                      <p>
                        Attributes
                        <i class="fas fa-angle-left right"></i>
                      </p>
                    </Link>
                    <ul class="nav nav-treeview">
                      <li class="nav-item">
                        <Link to="/admin/catalog/attribute" class="nav-link">
                          <i class="far fa-circle nav-icon"></i>
                          <p>Attributes</p>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          to="/admin/catalog/attribute-groups"
                          class="nav-link"
                        >
                          <i class="far fa-circle nav-icon"></i>
                          <p>Attributes Groups</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <Link to="/admin/catalog/options" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Options</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="#" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Manufacturers</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="#" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Downloads</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="#" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Reviews</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="#" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Information</p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item has-treeview">
                <Link to="#" class="nav-link">
                  <i class="nav-icon far fa-envelope"></i>
                  <p>
                    Design
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </Link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <Link to="#" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Layouts</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="#" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Theme Editor</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="pages/mailbox/read-mail.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Language Editor</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="pages/mailbox/read-mail.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Banners</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="pages/mailbox/read-mail.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>SEO URL</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item has-treeview">
                <Link to="#" class="nav-link">
                  <i class="nav-icon fas fa-book"></i>
                  <p>
                    SALES
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </Link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <Link to="pages/examples/invoice.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Orders</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="#" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Recurring Orders</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="#" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Return</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="#" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Gift Vouchers</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item has-treeview">
                <Link to="#" class="nav-link">
                  <i class="nav-icon far fa-plus-square"></i>
                  <p>
                    Customers
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </Link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <Link to="pages/examples/login.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Customers</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="pages/examples/register.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Customers Groups</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to="pages/examples/forgot-password.html"
                      class="nav-link"
                    >
                      <i class="far fa-circle nav-icon"></i>
                      <p>Customers Approvals</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to="pages/examples/forgot-password.html"
                      class="nav-link"
                    >
                      <i class="far fa-circle nav-icon"></i>
                      <p>Custom Fields</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item has-treeview">
                <Link to="#" class="nav-link">
                  <i class="nav-icon far fa-plus-square"></i>
                  <p>
                    Marketing
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </Link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <Link to="pages/examples/login.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Marketing</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="pages/examples/register.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Coupons</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to="pages/examples/forgot-password.html"
                      class="nav-link"
                    >
                      <i class="far fa-circle nav-icon"></i>
                      <p>Mail</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to="pages/examples/forgot-password.html"
                      class="nav-link"
                    >
                      <i class="far fa-circle nav-icon"></i>
                      <p>Google Shopping</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item has-treeview">
                <Link to="#" class="nav-link">
                  <i class="nav-icon far fa-plus-square"></i>
                  <p>
                    Systems
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </Link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <Link to="pages/examples/login.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Settings</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="pages/examples/register.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Localitions</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to="pages/examples/forgot-password.html"
                      class="nav-link"
                    >
                      <i class="far fa-circle nav-icon"></i>
                      <p>Maintenance</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item has-treeview">
                <Link to="#" class="nav-link">
                  <i class="nav-icon far fa-plus-square"></i>
                  <p>
                    Reports
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </Link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <Link to="pages/examples/login.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Reports</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="pages/examples/login.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Who`s Online</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="pages/examples/register.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
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
