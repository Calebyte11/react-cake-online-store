import React from "react";
import { CategoryListContainer } from "../Styles/CategoryList.styles";
import {
  Cake1,
  Pizza1,
  Hamburger,
  Dough,
  CakeParf,
  Sharwarma,
  GrilledChicken,
  Meatpie,
} from "../Images/Images";



const CategoryArr = [
  {
    name: "Cakes",
    ImgSrc: Cake1,
  },
  {
    name: "Pizza",
    ImgSrc: Pizza1,
  },
  {
    name: "Shawarma",
    ImgSrc: Sharwarma,
  },
  {
    name: "Hamburger",
    ImgSrc: Hamburger,
  },
  {
    name: "Doughnuts",
    ImgSrc: Dough,
  },
  {
    name: "Pies and Rolls",
    ImgSrc: Meatpie,
  },
  {
    name: "Chicken and Chips",
    ImgSrc: GrilledChicken,
  },
  {
    name: "Cake Parfait",
    ImgSrc: CakeParf,
  },
];


//===================== FUNCTIONAL COMPONENT ==================
function CategoryList(props) {
  return (
    <CategoryListContainer>
      <section>
        <span>Explore Categories </span>
        <button>Show all </button>
      </section>

      <ul>
        {CategoryArr.map((EachCategory) => {
          return (
            <li key={EachCategory.name}>
              <img src={EachCategory.ImgSrc} alt={EachCategory.name} />
              <h4>{EachCategory.name}</h4>
            </li>
          );
        })}
      </ul>
    </CategoryListContainer>
  );
}

export default CategoryList;
