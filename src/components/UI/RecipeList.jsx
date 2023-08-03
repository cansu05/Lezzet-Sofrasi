import React from "react";
import recipes from "../../assets/data/recipes";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  return (
    <>
      {recipes.map((item) => {
        if (item.category === "latest") {
          return <RecipeCard item={item} key={item.id} />;
        }
      })}
    </>
  );
};

export default RecipeList;