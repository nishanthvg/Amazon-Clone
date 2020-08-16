import React from 'react'
import './subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{basket},dispatch] = useStateValue();

    return (
        <div className="subtotal" >
            {/* price  */}
            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{` ${value}`}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift 
                        </small>
                    </>
                )}

                decimalScake = {2}
                value = {getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"₹"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
