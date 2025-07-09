import React, { useContext } from "react";
import Fooditem from "../Fooditem/Fooditem";
import { StoreContext } from "../../context/StoreContext";
import "./Fooddisplay.css";

const Fooddisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const filteredFoods =
    !category || category === "All"
      ? food_list
      : food_list.filter((item) => item.category === category);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((item) => (
            <Fooditem
              key={item._id}
               id={item._id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          ))
        ) : (
          <p>No dishes available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Fooddisplay;
