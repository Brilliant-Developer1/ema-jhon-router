import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([])

    useEffect( () => {
        fetch('/products.JSON')
        .then (res => res.json())
        .then (data => {
            setProducts(data)
            setDisplayProducts(data)
        })
    }, []);
    useEffect(() => {
       const savedCart = getStoredCart();
       const storedCart = []
       if (products.length){
        for (const key in savedCart) {
           
            const addedProduct = products.find( product => product.key === key);
            if (addedProduct) {
                const quantity = savedCart[key];
                addedProduct.quantity = quantity;
                storedCart.push(addedProduct);
            }
            
        }
        setCart(storedCart);
       }
    }, [products])
    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key)
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product.key)
    }
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchProducts)
    }
    return (
        <div>
            <div className='search-container'>
                <input 
                type="text" 
                onChange={handleSearch}
                placeholder=' Search your needs' />
                <FontAwesomeIcon className='icon-style' icon={faShoppingCart} />
            </div>
            <div className='shop-container'>
            <div className="product-container">
                
                {
                    displayProducts.map(product => { /* products.map(product => */
                        return <Product
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>
                        
                    })
                }
                
            </div>
            
            <div className="cart-container">
                <Cart
                cart={cart}>
                    <NavLink to='/orderReview'>
                        <button
                        className='btn-regular'
                        >Review Order<FontAwesomeIcon icon={faShoppingCart} /></button>
                    </NavLink>
                </Cart>
            </div>
        </div>
        </div>
    );
};

export default Shop;