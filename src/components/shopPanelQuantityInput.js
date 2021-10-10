import React from 'react';

function QuantityInputPanel({inputFocus,quantity,handleChange}){
    return(
        <>
            <input
                className="shopPanel__quantity"
                ref={inputFocus} 
                type='number' 
                value={quantity} 
                name='quantity' 
                onChange={handleChange}
            />
        </>
    )
}

export default QuantityInputPanel