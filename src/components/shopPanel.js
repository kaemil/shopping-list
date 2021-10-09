import React from 'react';
import QuantityInputPanel from './shopPanelQuantityInput'
import UnitSelectPanel from './shopPanelUnitSelect'
import ProductInput from './shopPanelProductInput'

function ShopPanel({inputFocus,handleChange,product,handleClick,quantity}){
    
    // Rozbić na componenty
    return (
        <div>
            <QuantityInputPanel 
                inputFocus={inputFocus} 
                quantity={quantity}
                handleChange={handleChange}
            />
            <UnitSelectPanel 
                handleChange={handleChange}
            />
            <ProductInput 
                handleChange={handleChange}
                product={product}
            />
            <button name='add' onClick={handleClick}>ADD</button>
        </div>
      );
}

export default ShopPanel