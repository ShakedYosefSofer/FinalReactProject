import { useEffect,useState} from "react";
import CategoryList from "./CategoryList";

const Categories = () => {
    const url = "http://localhost:3001/categories"
    
    const [categories,setCategories] = useState()

    useEffect(()=>{
        fetch(url).then(result => {return result.json()}).then(data => {setCategories(data)}).catch(err => console.log(err))
    },[])


    return ( 
    <div className="categories-content">
        {categories && <CategoryList className="category-list" categories={categories}/>}
    </div>
     );
}
 
export default Categories;