import { useEffect, useState } from "react";
import ProductCard from "../ProductsCard/ProductsCard";
function Products({ cart }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("rendered");

  useEffect(() => {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        console.log("fetch");
        setLoading(false);
        setProducts(res);
      })
      .catch(function (err) {
        console.log(err);
        setError(err);
      });
  }, []); 

  if (error) {
    return <div> Hey, Its embarrasing you got this {error} </div>;
  } else if (isLoading) {
    return (
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
          alt="loading"
        />
      </div>
    );
  } else {
    return (
      <div>
        {products.map(function (item) {
          return <ProductCard product={item} key={item.title}/>;
        })}
      </div>
    );
  }
}

export default Products;

