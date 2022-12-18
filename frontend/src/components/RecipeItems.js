import React from "react";  // Import the React library
import Accordion from "react-bootstrap/Accordion"; // Import the Accordion component from the react-bootstrap library
import Item from "./Item"; // Import the Item component from the current directory
import MenuItem from "./MenuItem" // Import the MenuItem component from the current directory
import Shoppingitem from "./shoppingitem" // Import the Shoppingitem component from the current directory

// This is a functional React component called "RecipeItems" that displays a list of food items or recipes
const RecipeItems = (params) => {
  // "recipes" is an array of food items or recipes passed to the component as a prop
  const recipes = params.items
  // Render the component
  return (
    // Render an Accordion component from the react-bootstrap library with a width of 80%
    <Accordion style={{ width: 80 + '%' }}>
      {/*  Map over the "recipes" array and render an Accordion.Item component for each item*/}
      {recipes.map((food, index) => {
        return (
          // Set the "eventKey" prop of the Accordion.Item component to the index of the current item in the array
          <Accordion.Item eventKey={index} key={index}>
            {/* Depending on the value of the "type" prop, render a different type of component for each item */}
            {params.type === "foodrecipe" && <Item food={food} />}
            {params.type === "recipemenu" && <MenuItem food={food} />}
            {params.type === "shoppinglist" && <Shoppingitem food={food} />}
          </Accordion.Item>
        );

      })}
    </Accordion>
  );
};
// Export the component to be used in other parts of the application
export default RecipeItems;
