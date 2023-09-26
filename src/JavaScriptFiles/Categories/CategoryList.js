import { Link, useParams } from "react-router-dom";
// import categoryPic from "../../Pics/Computers.jpg"

const CategoryList = ({categories}) => {
    return ( 
        <div className="categories">
            {categories.map((category, key) =>(
                <Link key={key} className="category-link" to={`/category/${category.title}`}>
                    <div className="category" key={key} >
                        <h2 className="category-title">{category.title}</h2>
                        <p className="category-description">{category.description}</p>
                    </div>
                </Link>
        ))}
        </div>
     );
}
 
export default CategoryList;
