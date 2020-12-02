import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Typical from 'react-typical';

const steps=[
  'BONVOYAGE',
  'CONTACT US FOR MORE DETAILS',
  'HOPE U LIKED OUR SERVICE!!'
]

class Africa extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

render() {
    const { user } = this.props.auth;
return (
    <div>
    <title>AFRICA</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="C:\Users\Sagarika\Desktop\WEB TECH PROJECT\style1.css" />
    <link rel="stylesheet" href="C:\Users\Sagarika\Desktop\WEB TECH PROJECT\style2.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <div className="top">
      <div className="bar black card" style={{padding:"30px"}}>
        <a className="bar-item button padding-large hide-medium hide-large right" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i className="fa fa-bars" /></a>
        <a href="#" className="bar-item button padding-large">HOME&nbsp;&nbsp;</a>
        <a href="#band" className="bar-item button padding-large hide-small">ABOUT US&nbsp;</a>
        <a href="#tour" className="bar-item button padding-large hide-small">TOUR&nbsp;</a>
        <a href="#contact" className="bar-item button padding-large hide-small">CONTACT&nbsp;</a>
        <br></br>
        <br></br>
        <button role="button" class="modal-trigger" href="#modal1" data-toggle="modal">Help</button> &nbsp;&nbsp;
        <button onClick={this.onLogoutClick}>Logout</button>
        <div className="dropdown-hover hide-small">
         {/* <button className="padding-large button" title="More">MORE <i className="fa fa-caret-down" /></button>     */}
          {/* <div className="dropdown-content bar-block card-4">
            <a href="#" className="bar-item button">HELP</a>
          </div> */}
        </div>
      </div>
    </div>
    <div id="navDemo" className="bar-block black hide hide-large hide-medium top margin">
      <a href="#band" className="bar-item button padding-large" onclick="myFunction()">AFRICA</a>
      <a href="#tour" className="bar-item button padding-large" onclick="myFunction()">ABOUT US</a>
      <a href="#contact" className="bar-item button padding-large" onclick="myFunction()">CONTACT</a>
      <button role="button" class="modal-trigger" href="#modal1" data-toggle="modal">Help</button>
      <a href="#" className="bar-item button padding-large">HELP</a>
    </div>
    {/* <button onClick={this.onLogoutClick}>Logout</button> */}
    <div className="content maxxx margin">
      {/* <div className="mySlides display-container center">
        <img src className="widthh" />
        <div className="display-bottommiddle container text-white padding-32 hide-small">
          <h3>AFRICA</h3>
          <p><b /></p>   
        </div>
      </div>
      <div className="mySlides display-container center">
        <img src className="widthh" />
        <div className="display-bottommiddle container text-white padding-32 hide-small">
          <h3>EGYPT</h3>
          <p><b> EGYPT is famous for its ancient history museums, the Pyramids of Giza, temple complexes, mummies and the Great Sphinx.</b></p>    
        </div>
      </div>
      <div className="mySlides display-container center">
        <img src className="widthh" />
        <div className="display-bottommiddle container text-white padding-32 hide-small">
          <h3 />
          <p><b>sight-seeing</b></p>    
        </div>
      </div> */}
      <br>
      </br>
      <br>
      </br>
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1932&q=80" + ")",backgroundSize:"100%",backdropFilter:"100%" ,height:900}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundImage:  "url(" + "https://images.unsplash.com/photo-1569600428323-7fd18782b483?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" + ")",backgroundSize:"100%",backdropFilter:"100%" ,height:900}} >
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1518978288375-f36cefcc992e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" + ")",backgroundSize:"100%",backdropFilter:"100%" ,height:900}}>
              
            </div>
          </div>
        </Slide>
      </div>
      <div className="container content center padding-64 maxwidth" id="band">
        <h2 className="wide">BON VOYAGE</h2>
        <p className="opacity"><i>TOUR PACKAGE WITH FAMILY AND FRIENDS!</i></p>
        <p className="justify">Welcome, BON VOYAGE provides you the best tour experience and satisfaction.The site provides finest service for all our loving voyagers. 
          We provide the best services to our customers like booking of flight tickets, accommodation of best hotels and resorts at exotic locations including variety 
          of world class food and beverages. We also provide transport facility with luxury cars for local sight seeing and many more facilities as customers satisfaction
          is our main motto.
        </p>
        <div className="row padding-32">
          {/* <h2>DEVELOPERS</h2>
          <div className="third">
            <p>Roshni</p>
            <img src className="round margin-bottom width90" alt="Random Name" />
          </div>
          <div className="third">
            <p>Sagarika</p>
            <img src className="round margin-bottom width90" alt="Random Name" />
          </div>
          <div className="third">
            <p>Shantanu</p>
            <img src className="round margin-bottom width90" alt="Random Name" />
          </div> */}
        </div>
      </div>
      <div className="black" id="tour">
        <div className="container content padding-64 maxwidth">
          <h2 className="wide center">TOUR PACKAGES</h2>
          <p className="opacity center"><i>Book your tickets!</i></p><br />
          <div className="row-padding padding-32 margin0-16px">
            <div className="third margin-bottom">
            <img src="https://images.unsplash.com/photo-1584719866406-c76ddee48493?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80" alt="Singapore Getaway" className="w3-hover-opacity" style={{width:"80%"}}/>
              <div className="container white">
                <p><b>Egyptian Extravaganza with Nile Cruise</b></p>
                <p className="opacity">7 nights 8 days</p>
                <p>
                  We provide:<br />
                  1)Flight bookings<br />
                  2)Accomodations according to tour type<br />
                  3)Meals(both veg and non-veg)<br />
                  <br />
                  Rs. 1,24,330 (Starting price per adult)<br />
                  for more details click buy tickets!
                </p>
                <button className="button black margin-bottom"><a href="https://www.thomascook.in/holidays/international-tour-packages/africa-tour-packages/egyptian-extravaganza-with-nile-cruise?pkgId=PKG000346&packageClassId=2&destination=PKG000346_africa_CONTINENT_1&destTag=Egypt" target="_blank">Buy Tickets</a></button>
              </div>
            </div>
            <br></br>
            <div className="third margin-bottom">
            <img src="https://images.unsplash.com/photo-1484318571209-661cf29a69c3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80" alt="Singapore Getaway" className="w3-hover-opacity"style={{width:"80%"}}/>
              <div className="container white">
                <p><b>Grand Bargain South Africa (Holiday Saving Account)</b></p>
                <p className="opacity">8 nights 9 days</p>
                <p>
                  We provide:<br />
                  1)Flight bookings<br />
                  2)Accomodations according to tour type<br />
                  3)Meals(both veg and non-veg)<br />
                  <br />
                  Rs. 1,52,000 (Starting price per adult)<br />
                  for more details click buy tickets!
                </p>
                <button className="button black margin-bottom"><a href="https://www.thomascook.in/holidays/international-tour-packages/africa-tour-packages/grand-bargain-south-africa?pkgId=PKG002402&packageClassId=0&destination=PKG002402_africa_CONTINENT_1&destTag=South%20Africa" target="_blank">Buy Tickets</a></button>
              </div>
            </div>
            <br></br>
            <div className="third margin-bottom">
            <img src="https://images.unsplash.com/photo-1512949028852-97e2b2b1df9b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1945&q=80" alt="Singapore Getaway" className="w3-hover-opacity" style={{width:"80%"}}/>
              <div className="container white">
                <p><b>Best of Kenya and Tanzania</b></p>
                <p className="opacity">7 nights 8 days</p>
                <p>
                  We provide:<br />
                  1)Flight bookings<br />
                  2)Accomodations according to tour type<br />
                  3)Daily Breakfast except on Day 01<br />
                  <br />
                  Rs. 2,72,430 (Starting price per adult)<br />
                  for more details click buy tickets!
                </p>
                <button className="button black margin-bottom"><a href="https://www.thomascook.in/holidays/international-tour-packages/africa-tour-packages/best-of-kenya-and-tanzania?pkgId=PKG003639&packageClassId=1&destination=PKG003639_africa_CONTINENT_1&destTag=Kenya" target="_blank">Buy Tickets</a></button>
              </div>
            </div>
            <br /><br /><br />
            <br /><br /><br />
          </div>
        </div>
      </div>
      <div className="container content padding-64 maxwidth" id="contact">
        <h2 className="wide center">CONTACT</h2>
        {/* <p className="opacity center"><i>Fan? Drop a note!</i></p> */}
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <div className="row padding-32"  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <div className="col m6 large margin-bottom">
            <br>
            </br>
            <i className="fa fa-map-marker width30" />Bangalore,Karnataka,India <br />
            <i className="fa fa-phone width60" /> Phone:+91 7975720829 or 9620857444 or 9535799528<br />
            <i className="fa fa-envelope width30"> </i> Email:bonvoyage@gmail.com<br />
          </div>
          <div className="col m6" style={{color:"dodgerblue",fontSize:38}}>
            {/* <form action="/note.php" target="_blank">
              <div className="row-padding margin2">
                <div className="half">
                  <input className="input border" type="text" placeholder="Name" required name="Name" />
                </div>
                {/* <div className="half">
                  <input className="input border" type="text" placeholder="Email" required name="Email" />
                </div>
              </div>
              <input className="input border" type="text" placeholder="Message" required name="Message" />
              <button className="button black section right" type="submit">SEND</button>
            </form> */}
            

            <Typical steps={steps} loop={Infinity} wrapper="p" />
          
          </div>
        </div>
      </div>
    </div>
    <br>
    </br>
    <img src className="image greyscale-min widthh" />
    <footer className="container padding-64 center opacity light-grey xlarge">
      <i className="fa fa-facebook-official hover-opacity" />
      <i className="fa fa-instagram hover-opacity" />
      <i className="fa fa-snapchat hover-opacity" />
      <i className="fa fa-pinterest-p hover-opacity" />
      <i className="fa fa-twitter hover-opacity" />
      <i className="fa fa-linkedin hover-opacity" />
      <p className="medium">Powered by <a >bonvoyage</a></p>
    </footer>
    <div id="modal1" class="modal">
    <div class="modal-content">
      <h4>NEED HELP?</h4>
      <p><i>BOOK YOUR TRIP AND ENJOY WITH FRIENDS AND FAMILY</i></p>
      <p>The packages are from various other websites like thomas cook etc click on buy ticket to proceed!</p>
      <p>Hope this helped you!!</p>
    </div>
    <div class="modal-footer" style={{backgroundColor:"black"}}>
      <a href="#!" class="modal-close waves-effect waves-green btn-flat" style={{color:"blue",backgroundColor:"white"}}>Close</a>
    </div>
    </div>
  </div>
    );
  }
}
Africa.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Africa);