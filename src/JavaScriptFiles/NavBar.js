import { Link } from "react-router-dom";
import Title from "./HomePage/Title";

function NavBar({title, isAuthenticated}){
    return(
        <nav className="navbar">
            <div className="links ">
                <Title title={title}/>  
                <Link to={isAuthenticated ? "/homepage": "/"} className="link link1" >Home </Link>|
                <Link to={isAuthenticated ? "/trending": "/"} className="link link2">Tending </Link>|
                <Link to={isAuthenticated ? "/categories": "/"}className="link link3">Categories </Link>|
                <Link to={isAuthenticated ? "/wishlist": "/"}className="link link4">Wish list </Link>
                <div style={{display:"inline-block", paddingRight:"35%"}}></div>
                <Link to={isAuthenticated ? "/cart": "/"}className="link link5" >Cart</Link>
            </div>
        </nav>
    );
}

export default NavBar