import React from 'react';
import './product.css';
import { useStateValue } from './StateProvider';

function Product({id, title, price, rating, image}) {
    const[{ basket },dispatch] = useStateValue();
    

    const addToBasket = () => {
        // Add item to object
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                id:id,
                title:title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }

    return (
        <div className = "product">
            <div className = "product_info">
                <p>{title}</p>
                <p className = "product_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className = "product_rating">
                    {
                    Array(rating).fill("1").map((_) => {
                        return <span role="img" aria-label= "star emoji">⭐</span>
                    })
                    }
                </div>
            </div>
            
            <img src = {image} alt="Product" />
            <button onClick = {addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
