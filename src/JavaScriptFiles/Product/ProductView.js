const ProductView = ({product}) => {
    return (
    <div className="product-view">
    <h1 variant="outlined">{product.title}</h1>
    <h2 variant="outlined">{product.description}</h2>
    <h3 variant="outlined">{product.price}</h3>
    <button> add to cart </button>

    </div> );
}
 
export default ProductView;