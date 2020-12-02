import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
class Travel extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
    <div>
      <button onClick={this.onLogoutClick} style={{backgroundColor:"black", color:"white"}}  >Logout</button>
      <br></br>
      <br></br>
      {/* <button role="button" class="modal-trigger" href="#modal1" data-toggle="modal">Help</button> */}
      <div style={{width:"100%", height:"1000px", backgroundSize: "100%", backgroundImage:"url(" + "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80 "+ ""}}>
        <div class="bgimg-1">
    
    <div class="caption">
    <a href="/asia"><span class="border" style={{ fontSize:64, color:"black"}}><br></br><br></br>ASIA</span></a>
    </div>
  </div>
  
  <div class="para">
    
    </div>
    </div>
    <p>Asia is too massive and diverse to conceptualize as a single digestible travel "destination". Even defining the borders of this continent is difficult - from the mountains around the Black Sea in the west, to the snow fields of Siberia in the east, there are more people and cities in Asia than outside of it. Travel options range widely, from the desert ruins and modern mega-malls of the Middle East to the magnificent ancient monuments in South Asia, and from the beach bungalows and jungle treks of Southeast Asia to the mega-cities and technology capitals of East Asia.
    </p>
  
  
    <div style={{width:"100%", height:"1000px", backgroundSize: "100%", backgroundImage:"url(" + "https://images.unsplash.com/photo-1453747063559-36695c8771bd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"+ ""}}>
  <div class="bgimg-2">
    <div class="caption">
    <a href="/europe"><span class="border" style={{ fontSize:64, color:"white"}}><br></br>EUROPE</span></a>
    
    </div>
  </div>
  
  <div class="p">
    <div class="para">
    </div>
  </div>  
  </div>       
    <p>Tourism in Europe is a thriving industry with nearly 500 million travelers visiting here every year. From bohemian Prague to playful Paris and from lively Lisbon to eternal Rome, Europe has some of the best travel destinations in the world. To make the most of their excursion to Europe, travelers are supposed to abide by a general rule: let one’s heart be the guide instead of a Europe travel guide. The culture of Europe is a fine example that full potential of human faculties transcends beyond geographic or linguistic bounds. Europe is more than just another destination; it’s a temptation that no ardent traveler can ignore.</p>
    

    <div style={{width:"100%", height:"600px", backgroundSize: "100%", backgroundImage:"url(" + "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1961&q=80"+ ""}}>
  <div class="bgimg-3">
    <div class="caption">
    <a href="/australia"><span class="border" style={{ fontSize:64, color:"white"}}><br></br>AUSTRALIA</span></a>
    </div>
  </div>
  
  <div class="p">
    <div class="para">
    </div>
  </div>
  </div>
        
    <p>A land of kangaroos, amazing wildlife, stunning sceneries, and a plethora of marine and fun activities, Australia is an ideal destination for an adventure junkie, nature enthusiast, beach lover or a party freak. Millions of travellers all around the world flock here to enjoy the unimaginable vistas, surf in the ocean and revel on its untouched islands. There are so much to do and see in Australia that several years will not be able to encompass all its attractions.Aussies are open and direct in their speech and sometimes can be sarcastic in their humour. Australia is an egalitarian society where there is no class distinction. The culture is heavily influenced by the British be it language, religion or sports.
  
  </p>
   
  <div style={{width:"100%", height:"600px", backgroundSize: "100%", backgroundImage:"url(" + "https://images.unsplash.com/photo-1507409613952-518459ac866e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"+ ""}}> 
  <div class="bgimg-4">
    <div class="caption">
        <a href="/northamerica"> <span class="border" style={{ fontSize:64, color:"black"}}>NORTH AMERICA</span></a>
    </div>
  </div>
  <div class="p">
    <div class="para">
    </div>
  </div>
  </div>
  
      <p>The third largest continent in the world in terms of landmass and the fourth largest in terms of population, North America, is what we know today as the New World, or simply the Americas. Home to over 500 million people, the continent, is divided into 24 counties, the largest by land mass being Canada and Mexico City by population. Mexico’s Chichen Itza is also one of the seven wonders of the modern world, which belongs to this continent. A global power, United States of America is also one of the most influential countries in the world.The United States of America, Canada, Mexico, Panama, Bahamas, and Costa Rica are the prominently visited countries of North America. Living on the edge, a fast-paced and relatively free-spirited life, the people belonging to this region lend a welcoming and warm vibe to this land. With compact diversity, three languages- English, Spanish, and French- prominently rule the continent.
  </p>
    
  
  <div style={{width:"100%", height:"600px", backgroundSize: "100%", backgroundImage:"url(" + "https://images.unsplash.com/photo-1510008029103-3f6faadde2a1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"+ ""}}> 
  <div class="bgimg-4">
    <div class="caption">
        <a href="/southamerica"> <span class="border" style={{ fontSize:64, color:"black"}}>SOUTH AMERICA</span></a>
    </div>
  </div>
  <div class="p">
    <div class="para">
    </div>
  </div>
  </div>
    <p>South America has on its official list two of the seven wonders of the world - Machu Picchu, also a UNESCO world heritage site, and the statue of Christ the Redeemer in Rio, besides being home to some of the most wonderful natural gems. The Amazon River, Parana River, Lake Titicaca, Andes Mountains, Amazon Basin, Angel Falls and Brazilian Highlands among others are all a part of this same continent.Like the Oceania continent, tourism is also becoming an increasingly important source of income for South America. With landscapes that leave you speechless, seemingly straight out of postcards, diversity in culture and food options, and significant historical relics and architecture, South America has been consistently attracting tourists from around the world. This number is anticipated to inflate, owing to the Olympics 2016 that will be held in Brazil. This continent has a special affinity for sports, the most loved being football, followed by basketball, cycling, baseball, rugby, futsal, and motorsports.</p>
  
  <div style={{width:"100%", height:"600px", backgroundSize: "100%", backgroundImage:"url(" + "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1048&q=80"+ ""}}> 
  <div class="bgimg-6">
    <div class="caption">
    <a href="/africa"><span class="border" style={{ fontSize:64, color:"black"}}>AFRICA</span></a>
    </div>
  </div>
  
  <div class="p">
    <div class="para">
    </div>
  </div>
  </div>
        
    <p>Cape Town, Pretoria, and Bloemfontein are the three capitals of South Africa. In Cape Town, the Table Mountain, Robben Island, Signal Hill and Cape Peninsula are the major attractions for tourists. The sight of hippos in the Limpopo River and the Penguins waddling on The Cape attract visitors to the country from afar. Other highlights of South Africa include the deserts of Kalahari, wildflowers of Namakwa, and the lion-buffalo-crocodile battle at the Kruger National Park. Not to miss, Simangaliso Wetland Park that is the only habitat with five distinct ecosystems. It invites both dolphins and zebras.
  </p>

  <div style={{width:"100%", height:"600px", backgroundSize: "100%", backgroundImage:"url(" + "https://images.unsplash.com/photo-1550064838-db4fac949049?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1049&q=80"+ ""}}>  
  <div class="bgimg-7">
    <div class="caption">
    <a href="/antartica"><span class="border" style={{ fontSize:64, color:"black"}}><br></br>ANTARCTICA</span></a>
    </div>
  </div>
  <div class="p">
    <div class="para">
         </div>
         </div>
         </div>
    <p>
    There’s a reason people go to such lengths to visit Antarctica, and its abundance of whales, seals, penguins, and other near-limitless seabirds are only part of the polar story. Even if you put its exotically beautiful wildlife aside, Antarctica is undeniably mythic in both scale and scenery: The largest glaciers and icebergs are found there, drawing polar newcomers and the certifiably snow-mad alike.
  </p>
    
 
  {/* <div id="modal1" class="modal">
    <div class="modal-content">
      <h4>NEED HELP?</h4>
      <p><i>BOOK YOUR TRIP AND ENJOY WITH FRIENDS AND FAMILY</i></p>
      <p>click on any continent you want to visit! Check the best package suitable for u..</p>
      <p>The packages are from various other websites like thomas cook etc click on buy ticket to proceed!</p>
      <p>Hope this helped you!!</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
    </div>
  </div> */}
  </div>
    );
  }
}
Travel.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Travel);