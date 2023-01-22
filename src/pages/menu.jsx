import { useState } from "react";
import { filters } from "../helpers/filter";
import { dishes } from "../helpers/dishes";

export const Menu = () => {
  const [items, setItems] = useState(dishes);

  const showFilter = (type) => {
    let newItems = [];
    if (type === "veg") newItems = dishes.filter((dish) => dish.isVeg === true);
    else if (type === "nonveg")
      newItems = dishes.filter((dish) => dish.isVeg !== true);
    else if (type === "special")
      newItems = dishes.filter((dish) => dish.special === true);
    else newItems = dishes.filter((dish) => dish.category === type);

    setItems(newItems);
  };

  return (
    <div className="menu">
      {/* || FILTER MENU */}

      <div className="menu__context">
        <nav className="menu__nav">
          {filters.map((element) => {
            return (
              <button
                className="menu__container"
                onClick={() => showFilter(element.id)}
              >
                <img src={element.image}></img>
                <li className="nowrap">{element.filterName}</li>
              </button>
            );
          })}
        </nav>
      </div>

      {/* || FOOD ITEMS */}

      <section className="menu__dishes">
        {items.map((dish) => {
          return (
            <div className="menu__cards">
              <figure>
                <img
                  src={dish.image}
                  className={dish.id}
                  width="300"
                  height="200"
                />
                <figcaption className="offscreen">
                  Image of {dish.dishName}
                </figcaption>
              </figure>
              <div className="menu__div">
                <h1 className="menu__food-name">{dish.dishName}</h1>
                <p className="menu__desc">{dish.desc}</p>
                <h4 className="menu__price">{dish.price} ₹</h4>
              </div>
              <button className="menu__button">Add to cart</button>
            </div>
          );
        })}
      </section>
    </div>
  );
};
