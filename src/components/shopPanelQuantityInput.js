import React from 'react';

function QuantityInputPanel({inputFocus,quantity,handleChange}){
    return(
        <>
            <input
                className="shopPanel__quantity"
                type='number' 
                name='quantity' 
                onChange={handleChange}
                ref={inputFocus} 
                value={quantity} 
            />
        </>
    )
}

export default QuantityInputPanel