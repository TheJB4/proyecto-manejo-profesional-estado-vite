import React from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/solid";
import { AppContext } from "../../context";

const Checkout = () => {
  let navigate = useNavigate();
  let { removeToCart, totalSumQuantity, setTotalSumQuantity } =React.useContext(AppContext);
  let { cart } = React.useContext(AppContext).state;

  let [quantity, setQuantity] = React.useState({});

  React.useEffect(() => {
    for (let i = 0; i < cart.length; i++) {
      const product = cart[i];

      if (Object.keys(quantity).length === 0) {
        product.quantity = 1;
        //quantity[product.title] = 1
      } else {
        product.quantity = parseInt(quantity.quantity[product.title],10) || 1;
      }

      console.log(product);
    }
  }, [quantity, cart, setQuantity, setTotalSumQuantity, totalSumQuantity]);

  React.useEffect(() => {
    let prices = cart.map((product) => {
      if (product.quantity > 1) {
        console.log(product.quantity);
        return product.price * product.quantity;
      }
      return product.price;
    });

    let total = prices.reduce((acc, b) => acc + b);
    setTotalSumQuantity(total);
  }, [cart, quantity, setTotalSumQuantity]);

  let applyQuantity = (target) => {
    setQuantity({
      ...quantity,
      quantity: {
        ...quantity.quantity,
        [target.name]: target.value,
      },
    });
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de Pedidos:</h3>
        {cart.map((product) => (
          <div className="Checkout-item" key={product.id}>
            <div className="Checkout-element">
              <h4>{product.title}</h4>
              <span>${product.price}</span>
            </div>
            <div className="inputNumber">
              <input
                type="number"
                name={product.title}
                min={1}
                max={1000}
                defaultValue={product.quantity}
                onChange={(e) => applyQuantity(e.target, product)}
              />
            </div>
            <div
              onClick={() => {
                removeToCart(product.id);
                product.onDisabledBtn = false;
              }}
            >
              <ArchiveBoxXMarkIcon className="deleteBtn" />
            </div>
          </div>
        ))}
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio Total: ${totalSumQuantity}</h3>
        <button
          type="button"
          onClick={() =>
            navigate("/checkout/information", { state: quantity.quantity })
          }
        >
          Continuar pedido
        </button>
      </div>
    </div>
  );
};

export default Checkout;
