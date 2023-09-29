import "./ProductsCard.css";
function ProductCard({ product }) {
  return (
    <div className="card">
      <div>{product.title}</div>
      <div>{product.price.value}</div>
    </div>
  );
}

export default ProductCard;
