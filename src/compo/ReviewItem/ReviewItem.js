import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewItem = (props) => {
    const {name, price, quantity, key} = props.product
    const {handleRemove} = props
    return (
        <div className='product'>
            <div>
            <h4 className='product-name'>{name}</h4>
            <p>${price}</p>
            <p>Quantity{quantity}</p>
            <button 
            onClick={() => handleRemove(key)}
            className='btn-regular'>
            <FontAwesomeIcon icon={faTimes} />
            Remove Item</button>
            </div>
        </div>
    );
};

export default ReviewItem;