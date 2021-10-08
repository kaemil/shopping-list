import React from 'react';

function ShopListItem({quantity,unit,product,id,handleClick}){
    return (
        <>
            <tr>
                <td>&#8226;</td>
                <td>{quantity}</td>
                <td>{unit}</td>
                <td>{product}</td>
                <td><button name='delete' onClick={(e)=> handleClick(e,id)}>X</button></td>
            </tr>
        </>
    );
}

export default ShopListItem