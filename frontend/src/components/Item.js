import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import FetchNutrition from "./FetchNutrition";
import Review from "./Review";
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// The Item component takes in a food object as a prop and displays information about it
const Item = ({ food }) => {
  // state hook to toggle the nutritional data
  const [toggleNutrition, setToggleNutrition] = useState(false);
// function to handle the change in the toggle switch for nutritional data
  const handleChange = (e) => {
    setToggleNutrition(!toggleNutrition);
  };


// The component returns JSX to render the food information in an accordion layout
  return (
    <div>
       {/* The header of the accordion displays the name of the food */}
      <div class="accordion-header">
      <Accordion.Header class="accordion-header"> {food.name}</Accordion.Header>
      {/* The body of the accordion contains the rest of the information about the food */}
</div>
      <Accordion.Body>
        {/* Display the category of the food */}
      <p>{food.category}</p>
       {/* Display the description of the food */}
        <p>{food.description}</p>
        {/* Display instructions for preparing the food */}
        <p>Instuctions:</p>
        <ol>
{/* Map through the instructions array to render each step as a list item */}
        {food.instructions.map((step, i) => (
        <li key={i}>{step}</li>
          ))}
        </ol>
        {/* Display the allergens in the food */}
        <p>Allergens Include: {food.allergens + " "} </p>
        {/* Create an accordion within the body to display the ingredients in the food */}
        <div class="rcorners">
        <Accordion>
          <Accordion.Header>Ingredients</Accordion.Header>
          <Accordion.Body>
            <p>Ingredients Include:</p>
            {/* Map through the ingredients array to render each ingredient and its quantity */}
            {food.ingredients.map((entry, i) => {
              return <div>

                {entry.food_ingredient}
                {" "}
                {entry.food_ingredientquantity}


              </div>

            })}
          </Accordion.Body>
        </Accordion>
        </div>
        {/* Create a toggle switch to show/hide nutritional data */}
        <FormGroup>
          {/*  // The `FormGroup` component is a wrapper for form controls that applies additional styling */}
          <FormControlLabel control={<Switch onChange={handleChange} defaultunchecked />} label="Toggle Nutritional Data" />
        {/* // The `FormControlLabel` component is a control with a label to display in a form.
          // It has a `Switch` component, which is a toggle control. When the switch is toggled, the `handleChange` function is called.
          // The label for the switch says "Toggle Nutritional Data". */}
        </FormGroup>
        <div class ="nutritionchart">
        {toggleNutrition && <FetchNutrition query={food.name} />}
        </div>
        <br></br>
        <br></br>
        {/*A `Stack` component is used to display two buttons side by side.*/}
        <Stack spacing={1} direction="row">
          <Button onClick={() => food.menu.splice(0, food.menu.length, "menu") && console.log(food.menu)} variant="contained" size="small">Add to Menu</Button>
          <Button onClick={() => food.shopping.splice(0, food.shopping.length, "shopping") && console.log(food.shopping)} variant="contained" size="small">Add To Shopping</Button>
        </Stack>
        <br></br>
        <div class="rcorners">
      {/*     // There is an Accordion component, which is a container for collapsible content.
        // The Accordion.Header component is the header for the accordion, and the Accordion.Body component is the collapsible content.
      // The Accordion.Body component contains a p element that renders the Review component, passing the food object as a prop. */}
        <Accordion>
          <Accordion.Header>Reviews</Accordion.Header>
          <Accordion.Body>
            <p><Review food={food} /></p>
          </Accordion.Body>
        </Accordion>
        </div>
      </Accordion.Body>
    </div>

  );
};
export default Item;
