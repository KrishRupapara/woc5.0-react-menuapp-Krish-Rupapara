import pizzaSVG from "../assets/pizzasvg.png";
import burgerSVG from "../assets/burger-svg.png";
import friesSVG from "../assets/fries-svg.png";
import chefSVG from "../assets/chef-svg.svg";
import chickenSVG from "../assets/chicken-svg.svg";
import vegSVG from "../assets/leaf-svg.svg";
import nonvegSVG from "../assets/nonveg-svg.svg";
export const filters = [
  {
    id: "pizza",
    filterName: "Pizza",
    image: pizzaSVG,
  },
  {
    id: "burger",
    filterName: "Burgers",
    image: burgerSVG,
  },
  {
    id: "chicken",
    filterName: "Chicken",
    image: chickenSVG,
  },
  {
    id: "fries",
    filterName: "Fries",
    image: friesSVG,
  },
  {
    id: "veg",
    filterName: "veg only",
    image: vegSVG,
  },
  {
    id: "nonveg",
    filterName: "non veg",
    image: nonvegSVG,
  },
  {
    id: "special",
    filterName: "Chef's special",
    image: chefSVG,
  },
];
