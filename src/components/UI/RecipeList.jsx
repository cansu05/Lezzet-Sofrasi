import React from "react";
import recipes from "../../assets/data/recipes";
import RecipeCard from "./RecipeCard";


const RecipeList = () => {
  return (
    <>
      {recipes.map((item, index) => {
        if (item.category === "latest") {
          return <RecipeCard item={item} key={index} />;
        }
      })}
    </>
  );
};

export default RecipeList;