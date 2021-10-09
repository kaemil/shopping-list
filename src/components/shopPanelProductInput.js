import React from 'react';

function QuantityInputPanel({product,handleChange}){
    return(
        <>
            <input 
                type='text' 
                value={product} 
                name='product' 
                placeholder='Product' 
                onChange={handleChange}/>
        </>
    )
}

export default QuantityInputPanel