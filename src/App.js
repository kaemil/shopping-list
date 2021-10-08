import React,{useState,useRef} from 'react';
import ShopList from './components/shopList';
import ShopPanel from './components/shopPanel';

function App() {
    const [count,setCount] = useState(0)
    const [product,setProduct] = useState('')
    const [productList,setProductList] = useState([])
    const [productQuantity,setProductQuantity] = useState([])
    const [unit,setUnit] = useState([])
    const inputFocus = useRef()

    const handleChange = (e) => (e.target.name === 'product') ? setProduct(e.target.value) : setUnit([...unit,e.target.value])

    const handleCounter = (e) => {
        if(e.target.name === '-'){ 
            setCount(count - 1)
        } else{
            setCount (count + 1)
        }
    }

    const handleClick = (e,id) =>{
        if(e.target.name === 'add'){
            setProductList([...productList,product])
            setProduct('')
            setProductQuantity([...productQuantity, count])
            inputFocus.current.focus()
        } else {
            productList.splice(id,1)
            setProductList([...productList])
        }
    }

    return (
    <div>
        <ShopPanel
            inputFocus={inputFocus}
            handleChange={handleChange}
            count={count}
            product={product}
            handleClick={handleClick}
            handleCounter={handleCounter}
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
