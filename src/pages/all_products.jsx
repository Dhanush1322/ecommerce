import React, { useEffect, useState } from 'react';
import "../css/all_products.css"; // Ensure you have the necessary CSS for styling

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products') // Updated API URL
      .then(res => res.json())
      .then(json => setProducts(json)) // Setting the fetched products to state
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3> {/* Display product title */}
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Category:</strong> {product.category}</p> {/* Display product category */}
          <button className="view-details-btn">View Details</button>
        </div>
      ))}
    </div>
  );
}

export default AllProducts;
