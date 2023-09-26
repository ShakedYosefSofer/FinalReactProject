import NavBar from './JavaScriptFiles/NavBar';
import HomePage from './JavaScriptFiles/HomePage/HomePage';
import Trending from './JavaScriptFiles/Trending/Trending';
import Categories from './JavaScriptFiles/Categories/Categories';
import WishLish from './JavaScriptFiles/WishList/WishList';
import Cart from './JavaScriptFiles/Cart/Cart';
import LoginPage from './JavaScriptFiles/Login/LoginPage';
import ProductList from './JavaScriptFiles/Product/ProductList';
import Product from './JavaScriptFiles/Product/Product';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes as Switch, Route} from "react-router-dom";



function App() {
 
  const title= "Shaked's market"

  const [client,setClient] = useState()

  let [isAuthenticated,setIsAuthenticated] = useState(false)
  
  useEffect(()=>{
    console.log("Use Effect without dependencies -- Happens/shown every rerenderd of the page")
  })
  
  useEffect(()=>{
    console.log("Use Effect with EMPTY array of dependencies -- Happens/shown only when the page renderd First") 
},[])

  
  useEffect(()=>{
    console.log("Use Effect with variables array of dependencies -- Happens/shown only when the variables changes")
    isAuthenticated ? console.log("Logged in"):console.log()
  },[isAuthenticated])  

  return (

    <Router>
    <div className="App">
      <NavBar title={title} isAuthenticated = {isAuthenticated}/>
      <div className="content" >  
        {}
        <Switch> 
          <Route path="/categories" element ={<Categories/>}/>
          <Route path={`/category/:name`} element ={<ProductList/>}/>
          <Route path={`/product/:productID`} element ={<Product/>}/>
          <Route path="/trending" element ={<Trending />}/>
          <Route path="/wishlist" element={ <WishLish /> }/>
          <Route path="/homepage" element = {client && <HomePage isAuthenticated={isAuthenticated} client={client}/>}/>
          <Route path="/cart" element={ <Cart />}/>
          <Route path="/" element ={<LoginPage setIsAuthenticated = {setIsAuthenticated} setClient={setClient}/>}/>
        </Switch> 
      </div>
    </div>

    </Router>
    
  );
}

export default App;