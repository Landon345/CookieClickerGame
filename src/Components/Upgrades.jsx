import React, { Component } from 'react';
import Upgrade from './Upgrade';

class Upgrades extends Component {
  

  render() { 
   
    const {myUpgrades, amountOfCookies, handleUpgradeClick} = this.props;
    
    const upgradesContainer = {
      display: "grid",
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr 1fr',
    };
    const eachUpgrade = {
      display: "grid",
      border: "3px solid black",
      borderRadius: '1%',
      margin: '2px'
    }

    return ( 
        


      <div style={upgradesContainer}>
        {/*{id: 0, description: "Mouse and Cursor are twice as efficient", price: 100, owned: false, imgsrc: ""}*/} 
        {myUpgrades.map(upgrade => (
          <div style = {eachUpgrade}>
          <Upgrade
            upgrade = {upgrade}
            id = {upgrade.id}
            key = {upgrade.id}
            description = {upgrade.description}
            price = {upgrade.price}
            owned = {upgrade.owned}
            imgsrc = {upgrade.imgsrc}
            handleUpgradeClick = {handleUpgradeClick}
          />
          </div>
        ))}

      </div>
    );
  }
}
 


export default Upgrades;