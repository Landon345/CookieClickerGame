import React, { Component } from 'react';



class CookieBaker extends Component {


    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    render() {
        const bakerContainer = {
            backgroundColor: 'rgb(200, 155, 60)',
            color: 'black',
            fontFamily: 'sans-serif',
            fontSize: '17px',
            padding: '10px',
            cursor: 'pointer',
            fontWeight: 'bold' 
        }

        const {baker, id, amount, name, price, production, imgsrc, handleBakerClick} = this.props

        const showProduction = () => {
            return "Production: " + production + " cookies.";
        }
        return ( <div style={bakerContainer} onClick = {() => handleBakerClick(baker)} title={showProduction()}>
            <img
            href='' src={imgsrc} alt={name} height='42' width='42' 
            style={{paddingRight: '10px'}}
            
            />
            <span>{this.numberWithCommas(amount)}</span>
            <span>  {name}</span>
            <span> |  Price: {this.numberWithCommas(price)}</span>
            



        </div> 
        );
    }
}
 


export default CookieBaker;