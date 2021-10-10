import React, { useState, useRef, useEffect } from 'react';
import ShopList from './components/shopList';
import ShopPanel from './components/shopPanel';
import './style/style.css';

function App() {
	const [quantity, setQuantity] = useState(1);
	const [productQuantity, setProductQuantity] = useState([]);

	const [choosenUnit, setChoosenUnit] = useState('');
	const [unit, setUnit] = useState([]);
    
	const [product, setProduct] = useState('');
	const [productList, setProductList] = useState([]);

	const inputFocus = useRef();

	useEffect(() => inputFocus.current.focus(), []);

    useEffect(()=>{
        const stored = JSON.parse(localStorage.getItem('shoppinglist'))
        if(stored){
            const {quantity,unit,list} = stored
            setProductQuantity(quantity)
            setUnit(unit)
            setProductList(list)
        }
    },[])

    useEffect(()=>{localStorage.setItem('shoppinglist',JSON.stringify({quantity:[...productQuantity], unit:[...unit], list:[...productList]}))
    },[productList,unit,productQuantity])

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
            setProductQuantity([...productQuantity, quantity]);
			setProduct('');
			setQuantity(1);
			inputFocus.current.focus();
		} else if(e.target.name === 'clear'){
            setUnit([]);
			setProductList([]);
            setProductQuantity([]);
        } else{
            [productQuantity,unit,productList].map(element => element.splice(id,1))
			setProductList([...productList]);
		}
	};
    const handlePress = (e) =>{
        if(e.key === 'Enter') {
			setUnit([...unit, choosenUnit]);
			setProductList([...productList, product]);
            setProductQuantity([...productQuantity, quantity]);
			setProduct('');
			setQuantity(1);
			inputFocus.current.focus();
        }
    }
	return (
		<div className="container">
            <h1 className="shopHeader">Create your own shopping list!</h1>
			<ShopPanel
                handlePress={handlePress}
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
