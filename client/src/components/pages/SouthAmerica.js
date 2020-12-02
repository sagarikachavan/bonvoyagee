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
class NorthAmerica extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
    <div>
    <title>South America</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="style1.css" />
        <link rel="stylesheet" href="style2.css" />
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
            <button role="button" class="modal-trigger" href="#modal1" data-toggle="modal">Help</button>&nbsp;
            <button onClick={this.onLogoutClick}>Logout</button>
            <div className="dropdown-hover hide-small">
              {/* <button className="padding-large button" title="More">MORE <i className="fa fa-caret-down" /></button>     
              <div className="dropdown-content bar-block card-4">
                <a href="#" className="bar-item button">HELP</a>
              </div> */}
            </div>
          </div>
        </div>
        <div id="navDemo" className="bar-block black hide hide-large hide-medium top margin">
          <a href="#band" className="bar-item button padding-large" onclick="myFunction()">EUROPE</a>
          <a href="#tour" className="bar-item button padding-large" onclick="myFunction()">ABOUT US</a>
          <a href="#contact" className="bar-item button padding-large" onclick="myFunction()">CONTACT</a>
          <button role="button" class="modal-trigger" href="#modal1" data-toggle="modal">Help</button>
        </div>
       
        <div className="content margin maxxx">
          {/* <div className="mySlides display-container center">
            <img src className="widthh" />
            <div className="display-bottommiddle container text-white padding-32 hide-small">
              <h3>United States</h3>
              <p><b>Land of the free</b></p> 
            </div>
          </div>
          <div className="mySlides display-container center">
            <img src className="widthh" />
            <div className="display-bottommiddle container text-white padding-32 hide-small">
              <h3>Canada</h3>
              <p><b>Land of the midnight sun</b></p>    
            </div>
          </div>
          <div className="mySlides display-container center">
            <img src className="widthh" />
            <div className="display-bottommiddle container text-white padding-32 hide-small">
              <h3>Mexico</h3>
              <p><b>The Land of Enchantment</b></p>    
            </div>
          </div>
          <div className="mySlides display-container center">
            <img src className="width120" />
            <div className="display-bottommiddle container text-white padding-32 hide-small">
              <h3>Bahamas</h3>
              <p><b>Breathtaking Islands</b></p>    
            </div>
          </div>
          <div className="mySlides display-container center">
            <img src className="widthh" />
            <div className="display-bottommiddle container text-white padding-32 hide-small">
              <h3>Cuba</h3>
              <p><b>The Land of Miracles</b></p>    
            </div>
          </div> */}

<br>
      </br>
      <br>
      </br>
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1576333912285-fc883c6896fa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80" + ")",backgroundSize:"100%",backdropFilter:"100%" ,height:900}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundImage:  "url(" + "https://images.unsplash.com/photo-1595517930215-d2778a56ac93?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=925&q=80" + ")",backgroundSize:"100%",backdropFilter:"100%" ,height:900}} >
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1552751753-0fc84ae5b6c8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" + ")",backgroundSize:"100%",backdropFilter:"100%" ,height:900}}>
              
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
                <img src className="round margin-bottom height30 width90" alt="Random Name" />
              </div>
              <div className="third">
                <p>Sagarika</p>
                <img src className="round margin-bottom width88" alt="Random Name" />
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
                <img src="https://images.unsplash.com/photo-1520610650750-3956c8c64792?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="Value Tour discover south America" className="w3-hover-opacity" style={{width:"80%"}}/>
                  <div className="container white">
                    <p><b>Value Tour discover south America</b></p>
                    <p className="opacity">10 nights 11 days</p>
                    <p>
                      We provide:<br />
                      1)Flight bookings<br />
                      2)Accomodations according to tour type<br />
                      3)Meals(both veg and non-veg even jain meals)<br />
                      <br />
                      Rs. 4,53,570 (Starting price per adult)<br />
                      for more details click buy tickets!
                    </p>
                    <button className="button black margin-bottom"><a href="https://www.sotc.in/holidays/value-tour-discover-south-america?pkgId=PKG005888&packageClassId=0&destination=PKG005888_south%20america_CONTINENT_1&destTag=Argentina" target="_blank">Buy Tickets</a></button>
                  </div>
                </div>
                <br></br>
                <div className="third margin-bottom">
                <img src="https://images.unsplash.com/photo-1489612138095-7b48362221ac?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="Summer Highlights Of Argentina & Chile" className="w3-hover-opacity" style={{width:"80%"}}/>
                  <div className="container white">
                    <p><b>Summer Highlights Of Argentina & Chile</b></p>
                    <p className="opacity">7 nights 8 days</p>
                    <p>
                      We provide:<br />
                      1)Sightseeing<br />
                      2)Accomodations according to tour type<br />
                      3)Meals (Daily breakfast except on day 1)<br />
                      <br />
                      Rs. 86,613 Starting price per adult<br />
                      for more details click buy tickets!
                    </p>
                    <button className="button black margin-bottom"><a href="https://www.sotc.in/holidays/summer-highlights-of-argentina-chile?pkgId=PKG004206&packageClassId=0&destination=PKG004206_south%20america_CONTINENT_1&destTag=Argentina" target="_blank">Buy Tickets</a></button>
                  </div>
                </div>
                <br></br>
                <div className="third margin-bottom">
                <img src="https://images.unsplash.com/photo-1555943665-ac3129ee2ba3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="Summer Highlights Of Brazil And Argentina" className="w3-hover-opacity" style={{width:"80%"}}/>
                  <div className="container white">
                    <p><b>Summer Highlights Of Brazil And Argentina</b></p>
                    <p className="opacity">8 nights 9 days</p>
                    <p>
                    We provide:<br />
                      1)Sightseeing<br />
                      2)Accomodations according to tour type<br />
                      3)Meals (Daily breakfast except on day 1)<br />
                      <br />
                      Rs. 92,930 Starting price per adult<br />
                      for more details click buy tickets!
                    </p>
                    <button className="button black margin-bottom"><a href="https://www.sotc.in/holidays/summer-highlights-of-brazil-and-argentina?pkgId=PKG004211&packageClassId=0&destination=PKG004211_south%20america_CONTINENT_1&destTag=Argentina" target="_blank">Buy Tickets</a></button>
                  </div>
                </div>
                <br /><br /><br />
                
                {/* <div className="third margin-bottom align">
                <img src="https://images.unsplash.com/photo-1465256410760-10640339c72c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80" alt="Singapore Getaway" className="w3-hover-opacity" style={{width:"80%"}}/>
                  <div className="container white">
                    <p><b>Summer Cultures Of Mexico</b></p>
                    <p className="opacity">7 nights 8 days</p>
                    <p>
                      We provide:<br />
                      1)Flight bookings<br />
                      2)Accomodations according to tour type<br />
                      3)Meals(both veg and non-veg)<br />
                      <br />
                      Rs. 1,08,400 (Starting price per adult)<br />
                      for more details click buy tickets!
                    </p>
                    <button className="button black margin-bottom"><a href="https://www.sotc.in/holidays/summer-cultures-of-mexico-global-coach-tours?pkgId=PKG006106&packageClassId=0&destination=PKG006106_mexico_COUNTRY_1&destTag=Mexico" target="_blank">Buy Tickets</a></button>
                  </div>
                </div>
                <br></br>
                <div className="third margin-bottom align">
                <img src="https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2032&q=80" alt="Singapore Getaway" className="w3-hover-opacity" style={{width:"80%"}}/>
                  <div className="container white">
                    <p><b>Bahamas Cruise</b></p>
                    <p className="opacity">17 nights 18 days</p>
                    <p>
                      We provide:<br />
                      1)Flight bookings<br />
                      2)Accomodations according to tour type<br />
                      3)Meals(both veg and non-veg)<br />
                      <br />
                      Rs. 4,05,126 (Starting price per adult)<br />
                      for more details click buy tickets!
                    </p>
                    <button className="button black margin-bottom"><a href="https://www.sotc.in/holidays/value-tour-american-explorer-with-bahamas-cruise?pkgId=PKG005838&packageClassId=0&destination=PKG005838_bahamas%20cruise_CITY_1&destTag=USA" target="_blank">Buy Tickets</a></button>
                  </div>
                </div>
                <br></br>
                <div className="third margin-bottom align">
                <img src="https://images.unsplash.com/photo-1503192851959-c6da8ac80cff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80" alt="Singapore Getaway" className="w3-hover-opacity" style={{width:"80%"}}/>
                  <div className="container white">
                    <p><b>Cuba</b></p>
                    <p className="opacity">7 nights 8 days</p>
                    <p>
                      We provide:<br />
                      1)Flight booking assistance<br />
                      2)Accomodations according to tour type<br />
                      3)Meals(both veg and non-veg)<br />
                      <br />
                      Rs. 2,85,600 (Starting price per adult)<br />
                      for more details click buy tickets!
                    </p>
                    <button className="button black margin-bottom"><a href="https://www.byond.travel/trip/cuba/cuba-celebration-art-culture/" target="_blank">Buy Tickets</a></button>
                  </div>
                </div> */}
                <br>
                </br><br></br>
              </div>
            </div>
          </div>
          <div className="container content padding-64 maxwidth" id="contact">
            <h2 className="wide center">CONTACT</h2>
            <p className="opacity center"><i>Fan? Drop a note!</i></p>
            <div className="row padding-32">
              <div className="col m6 large margin-bottom">
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
        <img src className="image greyscale-min widthh" />
        <footer className="container padding-64 center opacity light-grey xlarge">
          <i className="fa fa-facebook-official hover-opacity" />
          <i className="fa fa-instagram hover-opacity" />
          <i className="fa fa-snapchat hover-opacity" />
          <i className="fa fa-pinterest-p hover-opacity" />
          <i className="fa fa-twitter hover-opacity" />
          <i className="fa fa-linkedin hover-opacity" />
          <p className="medium">Powered by <a>bonvoyage</a></p>
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
NorthAmerica.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(NorthAmerica);