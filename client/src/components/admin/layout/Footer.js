import React from "react";
import { Link } from "react-router-dom";

function Footer(params) {
    return (
      <>
        <footer className="main-footer">
          <div className="float-right d-none d-sm-inline">
            Anything you want
          </div>
          <strong>
            Copyright &copy; 2014-2019
            <Link to="https://adminlte.io">AdminLTE.io</Link>.
          </strong>
          All rights reserved.
        </footer>
      </>
    );
    
}

export default Footer;