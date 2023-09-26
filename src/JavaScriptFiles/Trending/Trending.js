import { Link } from "react-router-dom";
import PageTitle from "../PageTitle";
import { useState,useEffect } from "react";


const Trending = () => {
    const url = "http://localhost:3001/categories"
      
    const [products, setProducts] = useState(null)

    useEffect(()=>{
        fetch(url).then(result => {return result.json()}).then(data => {
          let tempProds = []
          if(data)
            data.forEach(category => {
              category.products.forEach(product => {
                if (product.stars >= 4)
                tempProds.push(product)
          });
        });
        // console.log(tempProds)
        setProducts(tempProds)
      }
        ).catch(err => console.log(err))
    },[])
      
    return ( 
        <div className="products">
        {products && products.map((product, index) =>(
            <Link key={index} className="product-link" to={`/product/${product.title}`}>
                <div className="product" key={index}>
                    <h2 className="product-title">{product.title}</h2>
                    <p className="product-description">{product.price}</p>
                </div>
            </Link>
    ))}
    </div>
     );
}
 
export default Trending;