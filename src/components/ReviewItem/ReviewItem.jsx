import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product }) => {
    const { id, img, price, name, quantity } = product;
    return (
        <div className='review-item'>
            <img className='review-image' src={img} alt="" />
            <div className="review-details">
                <p className='product-title'>{name}</p>
                <p >Price : <span className='orange-text'>${price}</span> </p>
                <p >Price : <span className='orange-text'>{quantity}</span> </p>
            </div>
            <button className='btn-delete'><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    );
};

export default ReviewItem;