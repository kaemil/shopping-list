import React from 'react';

function ShopPanel({inputFocus,quantity,handleChange,handleClick,product}){
    
    // Rozbić na componenty
    return (
        <div>

            <input
                ref={inputFocus} 
                type='number' 
                value={quantity} 
                name='quantity' 
                onChange={handleChange}
            />
            <select
                onChange={handleChange}
                name='unit'
            >
                <option value='-'>-</option>
                <option value='kg'>kg</option>
                <option value='dkg'>dkg</option>
            </select>
            <input 
                type='text' 
                value={product} 
                name='product' 
                placeholder='Product' 
                onChange={handleChange}/>
            <button name='add' onClick={handleClick}>ADD</button>
        </div>
      );
}

export default ShopPanel