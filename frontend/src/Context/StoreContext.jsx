import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartitems, setcartitems] = useState({});

  const addToCart = (itemid) => {
    if (!cartitems[itemid]) {
      setcartitems((prev) => ({ ...prev, [itemid]: 1 }));
    } else {
      setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    }
  };

  const removeFromCart = (itemid) => {
    setcartitems((prev) => {
      if (!prev[itemid]) return prev;
      if (prev[itemid] === 1) {
        const newCart = { ...prev };
        delete newCart[itemid];
        return newCart;
      }
      return { ...prev, [itemid]: prev[itemid] - 1 };
    });
  };

  const getTotalcartamount = () => {
    let totalamount = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let iteminfo = food_list.find((product) => product._id === item);
        totalamount += iteminfo.price * cartitems[item];
      }
    }
    return totalamount;
  };

  const contextvalue = {
    food_list,
    cartitems,
    setcartitems,
    addToCart,
    removeFromCart,
    getTotalcartamount
  };

  return (
    <StoreContext.Provider value={contextvalue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
