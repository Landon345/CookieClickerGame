import React, { Component } from 'react';
import './App.css';
import CookieBakers from './Components/CookieBakers';
import Upgrades from './Components/Upgrades';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      amountOfCookies: 0,
      cookiesPerClick: 1,
      cps: 0,
      gainPercentOfcps: 1,
      priceMultiplier: 1.15,
      cookieBakers: [
        {id: 0, amount: 0, name: "Cursor", price: 10, production: 0.1,
         imgsrc: "https://www.pinclipart.com/picdir/middle/20-209434_hand-cursor-clipart.png"},
        {id: 1, amount: 0, name: "Grandma", price: 50, production: 1,
         imgsrc: "https://cdn.clipart.email/fd48e00ab51124b83091306ce9d142d3_grandma-baking-clipart_359-470.jpeg"},
        {id: 2, amount: 0, name: "Farm", price: 2000, production: 8,
         imgsrc: "https://classroomclipart.com/images/gallery/Clipart/Agriculture/TN_agriculture-farm-crops-growing-blue-sky-clipart.jpg"},
        {id: 3, amount: 0, name: "Mine", price: 10000, production: 47,
         imgsrc: "https://webstockreview.net/images/coal-clipart-coal-car-2.png"},
        {id: 4, amount: 0, name: "Factory", price: 130000, production: 260,
         imgsrc: "https://library.kissclipart.com/20181209/wkq/kissclipart-factory-clipart-factory-clip-art-ddf404f3071e6f3f.jpg"},
        {id: 5, amount: 0, name: "Bank", price: 500000, production: 1000,
        imgsrc: "https://images.cointelegraph.com/images/1480_IGh0dHBzOi8vczMuY29pbnRlbGVncmFwaC5jb20vc3RvcmFnZS91cGxvYWRzL3ZpZXcvZTg0Njc1Y2QxNjhkYmY3NmQ1ODg2NDgyOGZiOGNlMmYuanBn.jpg"},
        {id: 6, amount: 0, name: "Temple", price: 1300000, production: 3000,
         imgsrc: "https://www.pinclipart.com/picdir/middle/165-1659596_what-are-some-groups-where-people-like-to.png"}
      ],
      upgrades: [
        {id: 0, description: "Mouse and Cursor are twice as efficient", price: 100, owned: false,
         imgsrc: "http://images.clipartpanda.com/clipart-online-51-Free-Cursor-Hand-Clipart-Illustration.jpg"},
        {id: 1, description: "Mouse and Cursor are twice as efficient", price: 500, owned: false,
         imgsrc: "https://img.favpng.com/19/17/16/pointer-computer-mouse-red-bank-clip-art-png-favpng-jv6KjSD2JjhTNs42zazczTKqj.jpg"},
        {id: 2, description: "Grandmas are twice as efficient", price: 1000, owned: false,
         imgsrc: "https://image.shutterstock.com/image-vector/grandma-idea-260nw-46657123.jpg"},
        {id: 3, description: "Grandmas are twice as efficient", price: 5000, owned: false,
         imgsrc: "https://image.shutterstock.com/image-vector/grandma-idea-260nw-46657123.jpg"},
        {id: 4, description: "Farms are twice as efficient", price: 11000, owned: false,
         imgsrc: "https://www.kindpng.com/picc/m/426-4263411_clip-art-netalloy-big-image-png-farmers-field.png"},
        {id: 5, description: "Clicking gains +1% of your cps", price: 50000, owned: false,
         imgsrc: "http://images.clipartpanda.com/clipart-online-51-Free-Cursor-Hand-Clipart-Illustration.jpg"},
        {id: 6, description: "Farms are twice as efficient", price: 55000, owned: false,
         imgsrc: "https://www.kindpng.com/picc/m/426-4263411_clip-art-netalloy-big-image-png-farmers-field.png"},
         
      ],

    }
  }

  handleCookieClick = () => {
    
    this.setState((state) => {
      return {amountOfCookies: state.amountOfCookies + state.cookiesPerClick};
    });
  }

  handleUpgradeClick = (upgradeClicked) => {
    if(upgradeClicked.id === 0 && this.state.amountOfCookies >= upgradeClicked.price){
      //upgrades
      const upgrades = this.state.upgrades.filter(u => {return u.id !== upgradeClicked.id})
     
      //update cursor production from before and after
      const bakers = [...this.state.cookieBakers];
      let amount = bakers[0].amount;
      let cps =this.state.cps + amount * bakers[0].production;
      bakers[0].production *= 2;
      

      //set state
      this.setState((state) => {
        return {cookiesPerClick: Math.round(state.cookiesPerClick * 2),
                amountOfCookies: state.amountOfCookies - upgradeClicked.price,
                cookieBakers: bakers,
                upgrades: upgrades,
                cps: cps,
          };
      })
    }else if(upgradeClicked.id === 1 && this.state.amountOfCookies >= upgradeClicked.price){
      //upgrades
      const upgrades = this.state.upgrades.filter(u => {return u.id !== upgradeClicked.id})
     
      //update cursor production from before and after
      const bakers = [...this.state.cookieBakers];
      bakers[0].production *= 2;
      let amount = bakers[0].amount;
      let cps = this.state.cps + amount * bakers[0].production;

      //set state
      this.setState((state) => {
        return {cookiesPerClick: Math.round(state.cookiesPerClick * 2),
                amountOfCookies: state.amountOfCookies - upgradeClicked.price,
                cookieBakers: bakers,
                upgrades: upgrades,
                cps: cps,
          };
      })
    }else if(upgradeClicked.id === 2 && this.state.amountOfCookies >= upgradeClicked.price){
      //upgrades
      const upgrades = this.state.upgrades.filter(u => {return u.id !== upgradeClicked.id})
     
      //update grandma production from before and after
      const bakers = [...this.state.cookieBakers];
      bakers[1].production *= 2;
      let amount = bakers[1].amount;
      let cps = this.state.cps + amount * bakers[1].production;

      //set state
      this.setState((state) => {
        return {
                amountOfCookies: state.amountOfCookies - upgradeClicked.price,
                cookieBakers: bakers,
                upgrades: upgrades,
                cps: cps,
          };
      })
    }else if(upgradeClicked.id === 3 && this.state.amountOfCookies >= upgradeClicked.price){
      //upgrades
      const upgrades = this.state.upgrades.filter(u => {return u.id !== upgradeClicked.id})
     
      //update grandma production from before and after
      const bakers = [...this.state.cookieBakers];
      bakers[1].production *= 2;
      let amount = bakers[1].amount;
      let cps = this.state.cps + amount * bakers[1].production;

      //set state
      this.setState((state) => {
        return {
                amountOfCookies: Math.round(state.amountOfCookies - upgradeClicked.price),
                cookieBakers: bakers,
                upgrades: upgrades,
                cps: cps,
          };
      })
    }else if(upgradeClicked.id === 4 && this.state.amountOfCookies >= upgradeClicked.price){
      //upgrades
      const upgrades = this.state.upgrades.filter(u => {return u.id !== upgradeClicked.id})
     
      //update farms production from before and after
      const bakers = [...this.state.cookieBakers];
      bakers[2].production *= 2;
      let amount = bakers[2].amount;
      let cps = this.state.cps + amount * bakers[2].production;

      //set state
      this.setState((state) => {
        return {
                amountOfCookies: Math.round(state.amountOfCookies - upgradeClicked.price),
                cookieBakers: bakers,
                upgrades: upgrades,
                cps: cps,
          };
      })
    }else if(upgradeClicked.id === 5 && this.state.amountOfCookies >= upgradeClicked.price){
      //Clicking gains +1% of cps.
      const upgrades = this.state.upgrades.filter(u => {return u.id !== upgradeClicked.id})
      let newCookiesPerClick = this.state.cookiesPerClick + (this.state.cps * .01);
      
      this.setState((state) => {
        return {
                amountOfCookies: Math.round(state.amountOfCookies - upgradeClicked.price),
                upgrades: upgrades,
                gainPercentOfcps: 0.01,
                cookiesPerClick: newCookiesPerClick,
          };
      })


    }else if(upgradeClicked.id === 6 && this.state.amountOfCookies >= upgradeClicked.price){
      //upgrades
      const upgrades = this.state.upgrades.filter(u => {return u.id !== upgradeClicked.id})
     
      //update farms production from before and after
      const bakers = [...this.state.cookieBakers];
      bakers[2].production *= 2;
      let amount = bakers[2].amount;
      let cps = this.state.cps + amount * bakers[2].production;

      //set state
      this.setState((state) => {
        return {
                amountOfCookies: Math.round(state.amountOfCookies - upgradeClicked.price),
                cookieBakers: bakers,
                upgrades: upgrades,
                cps: cps,
          };
      })
    }else{

    }
  }
  handleBakerClick = (bakerClicked) => {
    if(this.state.amountOfCookies >= bakerClicked.price){
      //update amountofbaker and price of baker
      const bakers = [...this.state.cookieBakers];
      
      bakers[bakerClicked.id].amount++;
      bakers[bakerClicked.id].price = Math.round(bakers[bakerClicked.id].price * this.state.priceMultiplier);
      
      //set state and change cookies per second.
      this.setState((state) => {
        return {
              amountOfCookies: Math.round(state.amountOfCookies - bakerClicked.price/state.priceMultiplier),
              cookieBakers: bakers,
              cps: state.cps + (bakerClicked.production), 
                
          };
        });
    }

  }

  //master interval
  masterInterval = setInterval(() => {
    

    this.setState((state) => {
      return {
            amountOfCookies: state.amountOfCookies + state.cps/10,
            
              
        };
      });
  }, 100);

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  render() { 
    
    return (
      <div> 
      <div align="center">
        <p style={{fontFamily: 'Comic Sans MS', fontSize: '30px', fontWeight: 'bold', color: 'brown'}}>{this.numberWithCommas(this.state.amountOfCookies.toFixed(1))}</p>
        <img style={{cursor: 'pointer', border:'none', outline: 'none', background: 'gray'}}href="" src = "https://upload.wikimedia.org/wikipedia/commons/1/16/Choc-Chip-Cookie.jpg"
             height = "200" width = "200" alt = "Cookie" align = "middle" onClick={() => this.handleCookieClick()}></img>
        <p style={{fontFamily: 'Comic Sans MS', fontSize: '22px', fontWeight: 'bold', color: 'brown'}}>cps: {this.numberWithCommas(this.state.cps.toFixed(1))}</p>
        <p style={{fontFamily: 'Comic Sans MS', fontSize: '22px', fontWeight: 'bold', color: 'brown'}}>Per Click: {this.numberWithCommas(this.state.cookiesPerClick.toFixed(1))}</p>
      </div>
    <div style={{border: '5px solid black', fontFamily: 'Arial', background: 'rgb(230, 230, 100)'}}>
    <h1>Upgrades</h1>
      <Upgrades
        myUpgrades = {this.state.upgrades}
        amountOfCookies = {this.state.amountOfCookies}
        handleUpgradeClick  = {this.handleUpgradeClick}
      />
     </div>  
     <div style={{border: '5px solid black', fontFamily: 'Arial', marginTop: '5px', background: 'rgb(210, 190, 150)'}}>
    <h1>Bakers</h1>
      <CookieBakers
        bakers = {this.state.cookieBakers}
        amountOfCookies = {this.state.amountOfCookies}
        handleBakerClick = {this.handleBakerClick}
      />
      </div>
      </div>
     );
  }
}
 


export default App;
