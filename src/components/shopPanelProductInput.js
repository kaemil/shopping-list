import React from 'react';

function QuantityInputPanel({handlePress,product,handleChange}){
    return(
        <>
            <input 
                onKeyPress={handlePress}
                className="shopPanel__product"
                type='text' 
                value={product} 
                name='product' 
                placeholder='Product' 
                onChange={handleChange}
            />
        </>
    )
}

export default QuantityInputPanel