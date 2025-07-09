import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCat }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes, expertly crafted to satisfy every palate—from rich, aromatic curries and sizzling grilled specialties to fresh, vibrant salads and indulgent desserts, all made with the finest ingredients.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => setCat(item.menu_name)}
            className={`explore-menu-list-item ${
              category === item.menu_name ? "active" : ""
            }`}
          >
            <img src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
