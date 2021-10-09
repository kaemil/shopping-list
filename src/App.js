import React, { useState, useRef, useEffect } from 'react';
import ShopList from './components/shopList';
import ShopPanel from './components/shopPanel';
import './style/style.css';

function App() {
	const [quantity, setQuantity] = useState(1);
	const [productQuantity, setProductQuantity] = useState([]);

	const [product, setProduct] = useState('');
	const [productList, setProductList] = useState([]);

	const [choosenUnit, setChoosenUnit] = useState('-');
	const [unit, setUnit] = useState([]);
	const inputFocus = useRef();

	useEffect(() => inputFocus.current.focus(), []);

	const handleChange = (e) => {
		if (e.target.name === 'product') {
			setProduct(e.target.value);
		} else if (e.target.name === 'quantity') {
			setQuantity(e.target.value);
		} else setChoosenUnit(e.target.value);
	};

	const handleClick = (e, id) => {
		if (e.target.name === 'add') {
			setUnit([...unit, choosenUnit]);
			setProductList([...productList, product]);
			setProduct('');
			setQuantity(1);
			setProductQuantity([...productQuantity, quantity]);
			inputFocus.current.focus();
		} else {
			productList.splice(id, 1);
			setProductList([...productList]);
		}
	};

	return (
		<div>
			<ShopPanel
				inputFocus={inputFocus}
				handleChange={handleChange}
				product={product}
				handleClick={handleClick}
				quantity={quantity}
			/>
			<ShopList
				unit={unit}
				productQuantity={productQuantity}
				handleClick={handleClick}
				productList={productList}
			/>
		</div>
	);
}

export default App;
