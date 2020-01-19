import React, { Component } from 'react';
import CookieBaker from './CookieBaker';

class CookieBakers extends Component {
  

  render() { 
   
    const {bakers, amountOfCookies, handleBakerClick} = this.props;

    const bakersContainer = {
      display: "grid",
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr',
    };
    const eachBaker = {
      display: "grid",
      border: "3px solid black",
      borderRadius: '1%',
      margin: '2px'
    }
    
    
    return (  
      <div style = {bakersContainer}>
        {bakers.map(baker => (
          <div style = {eachBaker}>
          <CookieBaker
            baker = {baker}
            id = {baker.id}
            key = {baker.id}
            name = {baker.name}
            amount = {baker.amount}
            price = {baker.price}
            production = {baker.production}
            imgsrc = {baker.imgsrc}
            handleBakerClick = {handleBakerClick}
          />
          </div>
        ))}

      </div>
    );
  }
}
 


export default CookieBakers;
