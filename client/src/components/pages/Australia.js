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
class Australia extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
    <div>
    <title>AUSTRALIA</title>
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
        <button role="button" class="modal-trigger" href="#modal1" data-toggle="modal">Help</button>&nbsp;&nbsp;
        <button onClick={this.onLogoutClick}>Logout</button>
        <div className="dropdown-hover hide-small">
          {/* <button className="padding-large button" title="More">MORE <i className="fa fa-caret-down" /></button>     
          <div className="dropdown-content bar-block card-4">
            <a href="#" className="bar-item button">HELP</a>
          </div> */}
        </div>
      </div>
    </div>
    <div id="navDemo" className="bar-block black hide hide-large hide-medium top" style={{marginTop: '46px'}}>
      <a href="#band" className="bar-item button padding-large" onclick="myFunction()">AUSTRALIA</a>
      <a href="#tour" className="bar-item button padding-large" onclick="myFunction()">ABOUT US</a>
      <a href="#contact" className="bar-item button padding-large" onclick="myFunction()">CONTACT</a>
      <button role="button" class="modal-trigger" href="#modal1" data-toggle="modal">Help</button>
      <a href="#" className="bar-item button padding-large">HELP</a>
    </div>
    
    <div className="content margin maxxx">
      {/* <div className="mySlides display-container center">
        <img src style={{width: '100%'}} />
        <div className="display-bottommiddle container text-white padding-32 hide-small">
          <h3>AUSTRALIA</h3>
          <p><b /></p>   
        </div>
      </div>
      <div className="mySlides display-container center">
        <img src style={{width: '100%'}} />
        <div className="display-bottommiddle container text-white padding-32 hide-small">
          <h3>SYDNEY</h3>
          <p><b>Sydney is a vibrant city known for its yacht-studded harbour, superb beaches and the iconic Opera House with its towering sail structure.</b></p>    
        </div>
        <div className="mySlides display-container center">
          <img src style={{width: '100%'}} />
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
            <div style={{backgroundImage: "url(" +"https://images.unsplash.com/photo-1549305875-a18ca077f147?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1040&q=80" + ")",backgroundSize:"100%",backdropFilter:"100%" ,height:900}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundImage:  "url(" + "https://images.unsplash.com/photo-1458430447310-8b6c596117a6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80" + ")",backgroundSize:"100%",backdropFilter:"100%" ,height:900}} >
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1493375366763-3ed5e0e6d8ec?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1081&q=80" + ")",backgroundSize:"100%",backdropFilter:"100%" ,height:900}}>
              
            </div>
          </div>
        </Slide>
      

        

        <div className="container content center padding-64" style={{maxWidth: '800px'}} id="band">
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
              <img src className="round margin-bottom" alt="Random Name" style={{width: '90%'}} />
            </div>
            <div className="third">
              <p>Sagarika</p>
              <img src className="round margin-bottom" alt="Random Name" style={{width: '90%'}} />
            </div>
            <div className="third">
              <p>Shantanu</p>
              <img src className="round margin-bottom" alt="Random Name" style={{width: '90%'}} />
            </div> */}
          </div>
        </div>
        <div className="black" id="tour">
          <div className="container content padding-64" style={{maxWidth: '800px'}}>
            <h2 className="wide center">TOUR PACKAGES</h2>
            <p className="opacity center"><i>Book your tickets!</i></p><br />
            <div className="row-padding padding-32 margin0-16px">
              <div className="third margin-bottom">
              <img src="https://images.unsplash.com/photo-1516442052782-a2ae429edde7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1951&q=80" alt="Singapore Getaway" className="w3-hover-opacity" style={{width:"80%"}}/>
                <div className="container white">
                  <p><b>Australia Extravaganza and Grand Bargain New Zealand</b></p>
                  <p className="opacity">18 nights 19 days</p>
                  <p>
                    We provide:<br />
                    1)Flight bookings<br />
                    2)Accomodations according to tour type<br />
                    3)Meals(both veg and non-veg)<br />
                    <br />
                    Rs. 4,71,678 (Starting price per adult)<br />
                    for more details click buy tickets!
                  </p>
                  <button className="button black margin-bottom"><a href="https://www.thomascook.in/holidays/international-tour-packages/australia-tour-packages/australia-extravaganza-and-grand-bargain-new-zealand?pkgId=PKG002922&packageClassId=0&destination=PKG002922_australia_CONTINENT_1&destTag=New%20Zealand"  target="_blank">Buy Tickets</a></button>
                </div>
              </div>
              <br></br>
              <div className="third margin-bottom">
              <img src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1951&q=80" alt="Singapore Getaway" className="w3-hover-opacity" style={{width:"80%"}}/>
                <div className="container white">
                  <p><b>Grand Bargain Australia</b></p>
                  <p className="opacity">9 nights 10 days</p>
                  <p>
                    We provide:<br />
                    1)Flight bookings<br />
                    2)Accomodations according to tour type<br />
                    3)Meals(both veg and non-veg)<br />
                    <br />
                    Rs. 2,49,905 (Starting price per adult)<br />
                    for more details click buy tickets!
                  </p>
                  <button className="button black margin-bottom"><a href="https://www.thomascook.in/holidays/international-tour-packages/australia-tour-packages/grand-bargain-australia?pkgId=PKG002139&packageClassId=0&destination=PKG002139_australia_CONTINENT_1&destTag=Australia"  target="_blank">Buy Tickets</a></button>
                </div>
              </div>
              <br></br>
              <div className="third margin-bottom">
              <img src="https://images.unsplash.com/photo-1500088503771-82a6d85a5c09?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1987&q=80" alt="Singapore Getaway" className="w3-hover-opacity" style={{width:"80%"}}/>
                <div className="container white">
                  <p><b>Grand Bargain New Zealand</b></p>
                  <p className="opacity">8 nights 9 days</p>
                  <p>
                    We provide:<br />
                    1)Flight bookings<br />
                    2)Accomodations according to tour type<br />
                    3)Daily Breakfast except on Day 01<br />
                    <br />
                    Rs. 2,55,180 (Starting price per adult)<br />
                    for more details click buy tickets!
                  </p>
                  <button className="button black margin-bottom"><a href="https://www.thomascook.in/holidays/international-tour-packages/australia-tour-packages/grand-bargain-new-zealand?pkgId=PKG002146&packageClassId=0&destination=PKG002146_australia_CONTINENT_1&destTag=New%20Zealand"  target="_blank">Buy Tickets</a></button>
                </div>
              </div>
              <br /><br /><br />
              <br /><br /><br />
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
    </div></div>
    );
  }
}
Australia.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Australia);