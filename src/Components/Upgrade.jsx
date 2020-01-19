import React, { Component } from 'react';


class Upgrade extends Component {

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  render() {
    const upgradeContainer = {
      backgroundColor: 'rgb(200, 200, 50)',
      color: 'black',
      fontFamily: 'sans-serif',
      fontSize: '17px',
      padding: '10px',
      cursor: 'pointer',
      fontWeight: 'bold'
    }

    const { upgrade, id, description, price, owned, imgsrc, handleUpgradeClick } = this.props;
    return (
      <div style = {upgradeContainer} onClick = {() => handleUpgradeClick(upgrade)}>
        <img style={{paddingRight: '5px'}}href='' src={imgsrc} alt={description} height='42' width='42'
           />
         <span>{description}</span>
         <span> |  Price: {this.numberWithCommas(price)}</span>
      </div>
    );
  }
}

export default Upgrade;
