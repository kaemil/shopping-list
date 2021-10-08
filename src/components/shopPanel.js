import React from 'react';

function ShopPanel(props){
    return (
        <div>
            <button name='-' onClick={props.handleCounter}>-</button>
            <span>{props.count}</span>
            <button name='+' onClick={props.handleCounter}>+</button>
            <select
                onChange={props.handleChange}
                name='unit'
            >
                <option value='-'>-</option>
                <option value='kg'>kg</option>
                <option value='dkg'>dkg</option>
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