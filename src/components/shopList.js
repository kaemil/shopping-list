import React from 'react';
import ShopListItem from './shopListItem';

function ShopList({productList,productQuantity,unit,handleClick}){
        // Rozbić na componenty
    const products = productList.map((product,index)=>{
        return <ShopListItem 
                    quantity={productQuantity[index]}
                    unit={unit[index]}
                    key={index}
                    id={index}
                    product={product} 
                    handleClick={handleClick}
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