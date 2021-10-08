import React from 'react';
import ShopListItem from './shopListItem';

function ShopList(props){
    const products = props.productList.map((product,index)=>{
        return <ShopListItem 
                    quantity={props.productQuantity[index]}
                    unit={props.unit[index]}
                    key={index}
                    id={index}
                    product={product} 
                    handleClick={props.handleClick}
                />
    })
    return (
        <div>
            <table>
                <tbody>
                {products}
                </tbody>
            </table>
        </div>
      );
}

export default ShopList