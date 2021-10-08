import React from 'react';

function ShopPanel(props){
    return (
        <div>
            <button>-</button>
            <span>0</span>
            <button>+</button>
            <select>
                <option>szt.</option>
                <option>kg</option>
            </select>
            <input 
                ref={props.inputFocus} 
                type='text' 
                value={props.product} 
                name='product' 
                placeholder='Input product' 
                onChange={props.handleChange}/>
            <button name='add' onClick={props.handleClick}>ADD</button>
        </div>
      );
}

export default ShopPanel