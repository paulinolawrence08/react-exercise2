import React, { useContext, useState  } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../data/products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount().toFixed(2);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      {totalAmount > 0 ? (
        <div>
          <h1>Your Cart Items</h1>
          <div className="cart">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
          </div>
          <div className="checkout">
            <h2> Subtotal Price: ${totalAmount} </h2>
            <button onClick={() => navigate("/")}> Continue Shopping </button>
            <button onClick={() => {navigate("/");checkout();}}> Checkout</button>
          </div>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty!</h1>
      )}
    </>
  );
};
