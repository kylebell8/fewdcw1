import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const Item = ({ food }) => {


  return (
    <div>
      
      <Accordion.Header> {food.name}</Accordion.Header>
      
      <Accordion.Body>
      <p>{food.category}</p>
        <p>{food.description}</p>
        <p>{food.allergens}</p>
        <button onClick={() =>  {food.shopping.splice(0, food.shopping.length)}}> Remove from Shopping List </button>
      </Accordion.Body>
</div>


); };
export default Item;