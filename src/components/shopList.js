import React from 'react';
import ShopListItem from './shopListItem';

function ShopList({ productList, productQuantity, unit, handleClick }) {
	const getProducts = productList.map((product, index) => {
		return (
			<ShopListItem
				quantity={productQuantity[index]}
				unit={unit[index]}
				key={index}
				id={index}
				product={product}
				handleClick={handleClick}
			/>
		);
	});
	return (
		<div className="shopList">
			<table>
				<tbody>{getProducts}</tbody>
			</table>
		</div>
	);
}

export default ShopList;
