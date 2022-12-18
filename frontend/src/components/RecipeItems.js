import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Item from "./Item";
import MenuItem from "./MenuItem"
import Shoppingitem from "./shoppingitem"

const RecipeItems = (params) => {
  const recipes = params.items
  return (
    <Accordion style={{width:60+'%'}}>
      {recipes.map((food, index) => {
        return (
          <Accordion.Item eventKey={index} key={index}>
            {params.type === "recipe" && <Item food={food} />}
            {params.type === "shopping" && <Shoppingitem food={food} />}
            {params.type === "menu" && <MenuItem food={food}/> }
          </Accordion.Item>
        );

      })}
    </Accordion>
  );
};
export default RecipeItems;
