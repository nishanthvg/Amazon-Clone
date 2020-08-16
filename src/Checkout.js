import React from 'react';
import { useStateValue } from './StateProvider';
import './checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className = "checkout">
            <div className = "checkout_left">
                <img className = "checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/BFL/unknown_aw-BFL_Amazon_Page_Banner_1500px300x.gif" alt="checkout" />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your shopping basket is empty</h2>
                        <p>You have no item in your basket.</p>
                    </div>
                ):(
                    <div>
                        <h2 className="checkout_title">Your shopping basket </h2>
                        {/* List of product */}
                        {basket.map((item) => 
                            (<CheckoutProduct 
                            id={item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                            />)
                        )}
                        
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout_right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
