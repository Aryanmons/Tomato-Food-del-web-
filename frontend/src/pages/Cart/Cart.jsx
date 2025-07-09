import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartitems, food_list, removeFromCart,getTotalcartamount } = useContext(StoreContext);
  
  const navigate = useNavigate();
  
  
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <hr />
        {food_list.map((item, index) => {
          if (cartitems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartitems[item._id]}</p>
                  <p>${item.price * cartitems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          } else return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getTotalcartamount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalcartamount() === 0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalcartamount() === 0?0:getTotalcartamount()+2}</b>
            </div>
          </div>
       <button onClick={() => navigate('/PlaceOrder')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have the promo code ,Enter here</p>
            <div className="cart-promo-input">
              <input type="text" placeholder="Promo-code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
