import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
/* import '../Shop/Shop.css'; */

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        removeFromDb(key);
    }
    const handlePlaceOrder = () => {
        history.push('/placeOrder')
        setCart([]);
        clearTheCart();
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                   cart.map(product => <ReviewItem 
                    key={product.key}
                    product={product}
                    handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            
            <div className="cart-container">
                <Cart
                cart={cart}>
                   
                        <button
                        className='btn-regular'
                        onClick={handlePlaceOrder}
                        >Place Order<FontAwesomeIcon icon={faShoppingCart} /></button>
                    
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;