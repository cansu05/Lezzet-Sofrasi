import React from "react";
import recipes from "../../assets/data/recipes";
import ContentCard from "./ContentCard";

const ContentList = () => {
  return (
    <>
      {recipes.map((item, index) => {
        if (item.category === "favorite") {
          return <ContentCard item={item} key={index} />;
        }
      })}
    </>
  );
};

export default ContentList;
