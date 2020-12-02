import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1866&q=80 "+ ""}}>
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">code</i>
              BONVOYAGE
            </Link>
          </div>
        </nav>
      </div>
      </div>
    );
  }
}
export default Navbar;