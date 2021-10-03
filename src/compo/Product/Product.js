import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';


const Product = (props) => {
    const {name, img, seller, price,star,stock} = props.product
    /* console.log(props.product); */
    return (
        <div className='single-product-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h3 className='product-name'>{name}</h3>
                <p className='seller'>By: {seller}</p>
                <p>{star}</p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                initialRating={star}
                readonly
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                ></Rating> <br />
                <button
                className='btn-regular'
                onClick={ () => props.handleAddToCart(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;