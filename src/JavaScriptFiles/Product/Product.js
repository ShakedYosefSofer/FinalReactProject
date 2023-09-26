import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductView from "./ProductView";



const Product = () => { 
    const productName = useParams()
    const url = "http://localhost:3001/categories"
        
    const [product, setProduct] = useState(null)
    
    useEffect(()=>{
        fetch(url).then(result => {return result.json()}).then(data => {findAndSetProduct(data)}).catch(err => console.log(err))
    },[])

    const findAndSetProduct = (categories) =>{
    if(categories)
    categories.forEach(category => {
        category.products.forEach(
            (product)=> {if (product.title === productName.productID) {setProduct(product)}}
        )})
}
    return (
        product && <ProductView product={product}></ProductView>
     );
}
 
export default Product;