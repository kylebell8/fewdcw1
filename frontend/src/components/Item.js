import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import FetchNutrition from "./FetchNutrition";
import Review from "./Review";

const Item = ({ food }) => {
const [OpenNutrition, SetOpenNutrition] = useState(false);

  return (
    <div>
      
      <Accordion.Header> {food.name}</Accordion.Header>
      
      <Accordion.Body>
      <p>{food.category}</p>
        <p>{food.description}</p>
        <p>{food.price}</p>
        <p>{food.allergens}</p>
         
        <button onClick={() => SetOpenNutrition(!OpenNutrition)}>Toggle Nutrition</button>
        {OpenNutrition && <FetchNutrition query={food.name} />}
        
        <p><Review food={food}/></p>
        <p>{food.review}</p>
        <button onClick={() =>  food.menu.splice(0, food.menu.length, "menu") && console.log(food.menu)}> Add To Menu </button>
        <button onClick={() =>  food.shopping.splice(0, food.shopping.length, "shopping") && console.log(food.shopping)}> Add To shopping </button>
      </Accordion.Body>
</div>

); };
export default Item;
