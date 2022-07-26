import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'
import axios from 'axios'

function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	const[donnees,setData]=useState([])


    const BASE_URL = "https://fakestoreapi.com";
    const GetProducts = async () => {
    const res = await axios.get(`${BASE_URL}/products`);
    const resultat = await res.data
    setData(resultat);
      console.log(res.data)
    };
    
    useEffect(() => {
        GetProducts()
        },[]
    )  

	return (
		<div>
			<Banner>
				
				<h1 className='lmj-title'>Le Magasin de BACHAAAAAR</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				
				<ShoppingList cart={cart} updateCart={updateCart} data={donnees}/>
				<Cart cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App
