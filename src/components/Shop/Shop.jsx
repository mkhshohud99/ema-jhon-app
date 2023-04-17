import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from "react-router-dom";


const Shop = () => {
    const [products , setProducts] = useState([]);
    const [cart , setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    useEffect( ()=> {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    },[products])
    const handleAddToCart=(product)=>{
        let newCart = [];
    //    const newCart = [...cart , product];
    const exists = cart.find(pd => pd.id === product.id);
    if(!exists){
        product.quantity = 1;
        newCart = [...cart,product]
    }
    else{
        exists.quantity= exists.quantity + 1 ;
        const remaining = cart.filter(pd => pd.id !== product.id)
        newCart = [...remaining , exists];
    }
       setCart(newCart);
       addToDb(product.id);
    }
    const handelClearCart=()=>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                    key={product.id} 
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handelClearCart={handelClearCart}>
                    <Link to='/orders' >
                        <button className='proceed-btn'>
                            <span>Review Orders</span> 
                            <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        
                    </Link>
                </Cart>
            </div>
            
        </div>
    );
};

export default Shop;