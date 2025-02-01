import React, { useEffect, useState } from 'react';
import Header from "../components/Header.jsx";
 // Importing the Header component
import Banner from '../components/Banner/';
import "../css/index.css";

function Index() {
  // State to hold category data
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch categories from API on component mount
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => {
        setCategories(json); // Set fetched categories to state
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((err) => {
        setError('Failed to load categories'); // Handle error
        setLoading(false); // Stop loading on error
      });
  }, []);

  return (
    <div>
      <Header /> {/* Using the Header component */}
      <Banner />

      {/* Category Section */}
      <div className='category'>
        <h2 style={{ textAlign: 'center', color: 'black' }}>Select Category</h2>

        {loading && <p>Loading categories...</p>}  {/* Show loading message */}
        {error && <p>{error}</p>} {/* Show error message */}
        
        <div className="category-container">
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <div key={index} className="category-item">
                <p>{category}</p> {/* Displaying category name */}
              </div>
            ))
          ) : (
            <p>No categories available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
