import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{width:"100%",height:"1000px",backgroundImage: "url(" + "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1866&q=80 "+ ""}}>
      <div style={{ height: "75vh"}}>
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              
              <span style={{ fontFamily: "monospace" }}>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>WELCOME!!!</span> 
              
            </h4>
            <p className="flow-text grey-text text-darken-1">
             
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  backgroundColor:"red"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
              <br></br>
              <br>
              </br>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default Landing;