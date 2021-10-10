import React from 'react';

function QuantityInputPanel({handlePress,product,handleChange}){
    return(
        <>
            <input 
                className="shopPanel__product"
                type='text' 
                name='product' 
                placeholder='Insert product'
                onKeyPress={handlePress}
                value={product} 
                onChange={handleChange}
            />
        </>
    )
}

export default QuantityInputPanel