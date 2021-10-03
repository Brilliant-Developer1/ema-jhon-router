import React from 'react';
import img from '../../images/giphy.gif'
const PlaceOrder = () => {
    const pageStyle = {
        textAlign: 'center'
    }
    return (
        <div style={pageStyle}>
            <h1>Your Order is Placed</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default PlaceOrder;