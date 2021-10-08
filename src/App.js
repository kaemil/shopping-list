import React,{useState,useRef} from 'react';
import ShopList from './components/shopList';
import ShopPanel from './components/shopPanel';

function App() {
    const [count,setCount] = useState(0)
    const [product,setProduct] = useState('')
    const [productList,setProductList] = useState([])
    const inputFocus = useRef()

    const handleChange = (e) => setProduct(e.target.value)
    
    const handleClick = (e,id) =>{
        if(e.target.name === 'add'){
            setProductList([...productList,product])
            setProduct('')
            inputFocus.current.focus()
        } else{
            productList.splice(id,1)
            setProductList([...productList])
        }
    }

    return (
    <div>
        <ShopPanel
            inputFocus={inputFocus}
            handleChange={handleChange}
            product={product}
            handleClick={handleClick}
        />
        <ShopList
            handleClick={handleClick}
            productList={productList}
        />
    </div>
    );
}

export default App;
