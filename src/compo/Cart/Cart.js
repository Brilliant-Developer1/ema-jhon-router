import './Cart.css';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const {cart} = props;
    /* const totalReducer = (previous,product) => {
        return previous + product.price;
    }
    const totalQuantity = 0;
    const total = cart.reduce(totalReducer , 0 ); */
    /* Er bodle Uporer reduce function kora hoise */
    let totalQuantity = 0;
    let total = 0; 
    for (const product of cart) {
        if (!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total > 0 ?  15: 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
        <h3>Order Summary</h3>
        <p>Items ordered: {totalQuantity}</p>
        <div className='cart-total'>
        <p>Items: {total.toFixed(2)}</p>
        <p>Shipping & Handling: {shipping.toFixed(2)}</p>
        <p>Estimated Tax: {tax.toFixed(2)}</p>
        <p>Order Total: {grandTotal.toFixed(2)}</p>
        </div>
        <button
                className='btn-regular'
                >Review Order<FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Cart;