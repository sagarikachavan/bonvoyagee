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
class Asia extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
    <div>
    <title>ASIA</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="C:\Users\Sagarika\Desktop\WEB TECH PROJECT\style1.css" />
    <link rel="stylesheet" href="C:\Users\Sagarika\Desktop\WEB TECH PROJECT\style2.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <div className="top">
      <div className="bar black card" style={{padding:"30px"}}>
        <a className="bar-item button padding-large hide-medium hide-large right" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i className="fa fa-bars" /></a>
        <a href="#" className="bar-item button padding-large">HOME&nbsp;&nbsp; </a>
        <a href="#band" className="bar-item button padding-large hide-small">ABOUT US &nbsp; </a>
        <a href="#tour" className="bar-item button padding-large hide-small">TOUR&nbsp; </a>
        <a href="#contact" className="bar-item button padding-large hide-small">CONTACT &nbsp;</a>
        
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
      <a href="#band" className="bar-item button padding-large" onclick="myFunction()">ASIA</a>
      <a href="#tour" className="bar-item button padding-large" onclick="myFunction()">ABOUT US</a>
      <a href="#contact" className="bar-item button padding-large" onclick="myFunction()">CONTACT</a>
      <button role="button" class="modal-trigger" href="#modal1" data-toggle="modal">Help</button>
    </div>
   

    <div className="content margin maxxx">
      {/* <div className="mySlides display-container center">
        <img src="https://images.unsplash.com/photo-1585506942812-e72b29cef752?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8dGFqJTIwbWFoYWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60" className="widthh" />
        <div className="display-bottommiddle container text-white padding-32 hide-small">
          <h3>India</h3>
          <p><b></b></p>   
        </div>
      </div>
      <div className="mySlides display-container center">
        <img src className="widthh" />
        <div className="display-bottommiddle container text-white padding-32 hide-small">
          <h3>Dubai</h3>
          <p><b>Dubai is famous for sightseeing attractions.</b></p>    
        </div>
      </div>
      <div className="mySlides display-container center">
        <img src className="widthh" />
        <div className="display-bottommiddle container text-white padding-32 hide-small">
          <h3>Singapore</h3>
          <p><b>Merlion!</b></p>    
        </div>
      </div>  */}
      <br>
      </br>
      <br>
      </br>
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1587135941948-670b381f08ce?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80" + ")",backgroundSize:"100%",backdropFilter:"100%" ,height:900}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundImage:  "url(" + "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80" + ")",backgroundSize:"100%",backdropFilter:"100%" ,height:900}} >
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1535139262971-c51845709a48?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80" + ")",backgroundSize:"100%",backdropFilter:"100%" ,height:900}}>
              
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
              <img src="https://images.unsplash.com/photo-1542114633831-6c3880908875?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8c2luZ2Fwb3JlfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60" alt="Singapore Getaway" className="w3-hover-opacity" />
              <div className="container white">
                <p><b>Singapore Getaway</b></p>
                <p className="opacity">4 nights 5 days</p>
                <p>
                  We provide:<br />
                  1)Flight bookings<br />
                  2)Accomodations according to tour type<br />
                  3)Meals(both veg and non-veg)<br />
                  <br />
                  Rs. 66,751 (Starting price per adult)<br />
                  for more details click buy tickets!
                </p>
                <button className="button black margin-bottom"><a href="https://www.thomascook.in/holidays/international-tour-packages/singapore-tour-packages/singapore-getaway?pkgId=PKG000293&packageClassId=0&destination=PKG000293_singapore_COUNTRY_1&destTag=Singapore" target="_blank">Buy Tickets</a></button>
              </div>
            </div>
            <br>
            </br>
            <div className="third margin-bottom">
              <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60" alt="Dubai Fully Loaded - Crazy Deal (IndiGo Special)" className="hover-opacity widthh" />
              <div className="container white">
                <p><b>Dubai Fully Loaded - Crazy Deal (IndiGo Special)</b></p>
                <p className="opacity">5 nights 6 days</p>
                <p>
                  We provide:<br />
                  1)Flight bookings<br />
                  2)Accomodations according to tour type<br />
                  3)Meals(both veg and non-veg)<br />
                  <br />
                  Rs. 41,768 (Starting price per adult)<br />
                  for more details click buy tickets!
                </p>
                <button className="button black margin-bottom"><a href="https://www.thomascook.in/holidays/international-tour-packages/dubai-tour-packages/dubai-fully-loaded-crazy-deal-indigo-special?pkgId=PKG005294&packageClassId=0&destination=PKG005294_dubai_CITY_1&destTag=United%20Arab%20Emirates" target="_blank">Buy Tickets</a></button>
              </div>
            </div>
            <br>
            </br>
            <div className="third margin-bottom">
              <img src="https://images.unsplash.com/photo-1573790387438-4da905039392?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsaXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Bali Villa Special - Crazy Deal" className="hover-opacity widthh" />
              <div className="container white">
                <p><b>Bali Villa Special - Crazy Deal</b></p>
                <p className="opacity">6 nights 7 days</p>
                <p>
                  We provide:<br />
                  1)Flight bookings<br />
                  2)Accomodations according to tour type<br />
                  3)Daily Breakfast except on Day 01<br />
                  <br />
                  Rs. 55,591 (Starting price per adult)<br />
                  for more details click buy tickets!
                </p>
                <button className="button black margin-bottom"><a href="https://www.thomascook.in/holidays/international-tour-packages/bali-tour-packages/bali-villa-special-crazy-deal?pkgId=PKG005058&packageClassId=1&destination=PKG005058_bali_CITY_1&destTag=Indonesia" target="_blank">Buy Tickets</a></button>
              </div>
            </div>
            <br /><br /><br />
            <br /><br /><br />
            <div className="third margin-bottom align">
              <img src="https://images.unsplash.com/photo-1573548842355-73bb50e50323?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTMyfHxhbmRhbWFuJTIwYW5kJTIwbmljb2JhciUyMGlzbGFuZHN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60" alt="Luxury - Andaman Getaway with Flexi Flights" className="hover-opacity widthh" />
              <div className="container white">
                <p><b>Luxury - Andaman Getaway with Flexi Flights</b></p>
                <p className="opacity">3 nights 4 days</p>
                <p>
                  We provide:<br />
                  1)Flight bookings<br />
                  2)Accomodations according to tour type<br />
                  3)Daily Breakfast except on Day 01<br />
                  <br />
                  Rs. 69,328 (Starting price per adult)<br />
                  for more details click buy tickets!
                </p>
                <button className="button black margin-bottom"><a href="https://www.thomascook.in/holidays/india-tour-packages/andaman-and-nicobar-tour-packages/luxury-andaman-getaway-with-flexi-flights?pkgId=PKG003131&packageClassId=2&destination=PKG003131_andaman%20and%20nicobar_STATE_0&destTag=Andaman%20and%20Nicobar" target="_blank">Buy Tickets</a></button>
              </div>
            </div>
            <br></br>
            <div className="third margin-bottom align">
              <img src="https://images.unsplash.com/photo-1469996933743-a1f6a78f1082?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njh8fGphcGFufGVufDB8fDB8&auto=format&fit=crop&w=500&q=60" alt="Best of Japan and Korea - Cherry Blossom Special" className="hover-opacity widthh" />
              <div className="container white">
                <p><b>Best of Japan and Korea - Cherry Blossom Special</b></p>
                <p className="opacity">10 nights 11 days</p>
                <p>
                  We provide:<br />
                  1)Flight bookings<br />
                  2)Accomodations according to tour type<br />
                  3)Meals(both veg and non-veg)<br />
                  <br />
                  Rs. 3,05,497 (Starting price per adult)<br />
                  for more details click buy tickets!
                </p>
                <button className="button black margin-bottom"><a href="https://www.thomascook.in/holidays/international-tour-packages/south-korea-tour-packages/best-of-japan-and-korea-cherry-blossom-special?pkgId=PKG002043&packageClassId=0&destination=PKG002043_south%20korea_COUNTRY_1&destTag=Japan" target="_blank">Buy Tickets</a></button>
              </div>
            </div>
            <br>
            </br>
            <div className="third margin-bottom align">
              <img src="https://images.unsplash.com/photo-1596147798609-3d9c5627f50e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTg3fHxwaHVrZXQlMjBpc2xhbmR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60" alt="Phuket - Crazy Deal" className="hover-opacity widthh" />
              <div className="container white">
                <p><b>Phuket - Crazy Deal</b></p>
                <p className="opacity">4 nights 5 days</p>
                <p>
                  We provide:<br />
                  1)Flight bookings<br />
                  2)Accomodations according to tour type<br />
                  3)Daily Breakfast except on Day 01<br />
                  <br />
                  Rs. 39,037 (Starting price per adult)<br />
                  for more details click buy tickets!
                </p>
                <button className="button black margin-bottom"><a href="https://www.thomascook.in/holidays/international-tour-packages/thailand-tour-packages/phuket-crazy-deal?pkgId=PKG004802&packageClassId=1&destination=PKG004802_thailand_COUNTRY_1&destTag=Thailand" target="_blank">Buy Tickets</a></button>
                <br>
                </br>
              </div>
            </div>
            <br>
            </br>
            <br>
            </br>
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
Asia.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Asia);