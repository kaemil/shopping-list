import React from 'react';
import QuantityInputPanel from './shopPanelQuantityInput'
import UnitSelectPanel from './shopPanelUnitSelect'
import ProductInput from './shopPanelProductInput'

function ShopPanel({handlePress,inputFocus,handleChange,product,handleClick,quantity}){
    
    // Rozbić na componenty
    return (
        <div className="shopPanel">
            <QuantityInputPanel 
                inputFocus={inputFocus} 
                quantity={quantity}
                handleChange={handleChange}
            />
            <UnitSelectPanel 
                handleChange={handleChange}
            />
            <ProductInput 
                handlePress={handlePress}
                handleChange={handleChange}
                product={product}
            />
            <button className="shopPanel__button--clear" name='clear' onClick={handleClick}>CLEAR</button>
            <button className="shopPanel__button--add" name='add' onClick={handleClick}>ADD</button>
        </div>
      );
}

export default ShopPanel