import React, { useState, useRef, useEffect } from 'react';
import ShopList from './components/shopList';
import ShopPanel from './components/shopPanel';
import './style/style.css';

function App() {
    // Quantity state
	const [quantity, setQuantity] = useState(1);
	const [productQuantity, setProductQuantity] = useState([]);
    // Unit state
	const [choosenUnit, setChoosenUnit] = useState('psc');
	const [unit, setUnit] = useState([]);
    // Product state
	const [product, setProduct] = useState('');
	const [productList, setProductList] = useState([]);

	const inputFocus = useRef();

    // Focusing first input at page load
	useEffect(() => inputFocus.current.focus(), []);

    // Local Storage for setting and getting data.
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

    // Setting quantitiy, unit and product handle
	const handleChange = (e) => {
		if (e.target.name === 'product') {
			setProduct(e.target.value);
		} else if (e.target.name === 'quantity') {
			setQuantity(e.target.value);
		} else setChoosenUnit(e.target.value);
	};

    // Adding and clearing all products handle and single deleting
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

    // Sending data from input using Enter key
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
				productQuantity={productQuantity}
				unit={unit}
				handleClick={handleClick}
				productList={productList}
			/>
            <div className="shopFooter"><span>&#128722;</span></div>
		</div>
	);
}

export default App;
