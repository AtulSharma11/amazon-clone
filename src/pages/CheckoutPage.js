import React from "react";
import "./CheckoutPage.css";
import { useStateValue } from "/Users/atulsharma/Downloads/projects/Amazon Clone/amazon-clone/src/StateProvider.js";
import CheckoutProduct from "./CheckoutProduct";

function CheckoutPage() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Cart is empty.</h2>
          <p>
            The price and availability of items at Amazon.ca are subject to
            change. The shopping cart is a temporary place to store a list of
            your items and reflects each item's most recent price.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Shopping Cart</h2>
          {/* List out all of the checkout Products */}
          {basket.map((item) => (
            <CheckoutProduct
              item={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
