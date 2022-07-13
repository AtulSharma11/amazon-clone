import React from "react";
import "./HomePage.css";
import Product from "./Product.js";

function HomePage() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/61RI8ywLDwL._SX3000_.jpg"
        alt=""
      />
      {/* Product id ,title ,price , rating, image */}
      <div className="home__row">
        <Product
          id="12422342"
          title="2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 8 core CPU and 14 core GPU, 16GB RAM, 512GB SSD) - Space Grey - English"
          price={2499.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_SL1500_.jpg"
        />
        <Product
          id="567576586789"
          title="Xbox Series X - Xbox Series X Edition"
          price={599.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61vkgDi7wHL._AC_SX679_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="6578567"
          title="The Summer I Turned Pretty"
          price={9.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71j25Ib5FSL.jpg"
        />
        <Product
          id="34577889"
          title="Amazon Fire TV 55inch 4-Series 4K UHD smart TV"
          price={439.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61wCcgVn7-L._AC_SX679_.jpg"
        />
        <Product
          id="0945567"
          title="Harry'S House (Vinyl)"
          price={38.98}
          rating={5}
          image="https://m.media-amazon.com/images/I/71sZfX2A-lL._AC_SL1500_.jpg"
        />
        <div />
      </div>
      <div className="home__row">
        <Product
          id="5755567"
          title="PlayStation 5 Console Disc Edition Horizon Forbidden West Bundle"
          price={699.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61NlIib88JL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default HomePage;
