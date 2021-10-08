import React from 'react';

function ShopListItem(props){
    return (
        <>
            <tr>
                <td>

                </td>
                <td>

                </td>
                <td>
                    {props.product}
                </td>
                <td>
                    <button name='delete' onClick={(e)=>props.handleClick(e,props.id)}>X</button>
                </td>
            </tr>
        </>
    );
}

export default ShopListItem