import React from 'react';

function ShopListItem({quantity,unit,product,id,handleClick}){
        // Rozbić na componenty
    return (
        <>
            <tr>
                <td>&#10148;</td>
                <td>{quantity}</td>
                <td>{unit}</td>
                <td>{product}</td>
                <td><button className="shopList__button--delete" name='delete' onClick={(e)=> handleClick(e,id)}>X</button></td>
            </tr>
        </>
    );
}

export default ShopListItem