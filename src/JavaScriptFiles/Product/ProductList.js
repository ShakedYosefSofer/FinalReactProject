import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductList = () => {
    const categoryName = useParams()
    const [category,setCategory] = useState(undefined)

    useEffect(()=>{
        // console.log(categoryName)    
        fetch("http://localhost:3001/categories?title="+categoryName.name).then((res)=> {return res.json()}).then((data)=>{setCategory(data[0])})
  },[])

    return ( 
        <div className="products">
        {/* {console.log(category)}    */}
         {category && category.products.map((product, index) =>(
             <Link key={index}className="product-link" to={`/product/${product.title}`}>
                 <div className="product" key={index}>
                     <h2 className="product-title">{product.title}</h2>
                     <p className="product-description">{product.price}</p>
                     <button> add to cart </button>

                 </div>
             </Link>
     ))}
     </div>
     );
}
 
export default ProductList;