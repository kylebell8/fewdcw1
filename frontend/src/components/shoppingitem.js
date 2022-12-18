import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Review from "./Review";
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "../index.css"

const Item = ({ food }) => {


  return (
    <div>
      
      <Accordion.Header> {food.name}</Accordion.Header>
      <Accordion.Body>
      <p>{food.category}</p>
        <p>Allergens Include: {food.allergens + " "} </p>

            <p>Ingredients Include:</p>
            {food.ingredients.map((entry, i) => {
              return <div>
                {entry.food_ingredient}
                {" "}
                {entry.food_ingredientquantity}
              </div>
            })}
          
        
        <br></br>
        <Stack spacing={1} direction="row">
        <Button onClick={() =>  {food.shopping.splice(0, food.shopping.length)}} variant="contained" size="small">Remove from Shopping List</Button>
        </Stack>
        <br></br>
      </Accordion.Body>
</div>


); };
export default Item;