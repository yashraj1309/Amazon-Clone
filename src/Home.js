import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  // console.log(products);
  return (
    <div className="home">
      <div className="home_container">
        <div className="home_image_grid">
          <img
            className="home_image"
            alt="Prime"
            src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61MTFnfw6YL._SX3000_.jpg"
          />
          <div className="home_imgShadow"></div>
        </div>
        <div className="home_row">
          {products.map((product) => (
            <Product
              key={product?.id}
              id={product?.id}
              title={product?.title}
              price={product?.price}
              description={product?.description}
              image={product.image}
              rating={product.rating.rate}
              ratingCount={product.rating.count}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
