import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "/Users/atulsharma/Downloads/projects/Amazon Clone/amazon-clone/src/StateProvider.js";
import { getBasketTotal } from "/Users/atulsharma/Downloads/projects/Amazon Clone/amazon-clone/src/reducer.js";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      {/* Price */}

      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) : <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order containes a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Procced to Checkout</button>
    </div>
  );
}

export default Subtotal;
