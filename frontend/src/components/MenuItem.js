import React, { useState} from "react"; // Import the React library and the useState hook
import Accordion from 'react-bootstrap/Accordion'; // Import the Accordion component from the react-bootstrap library
import FetchNutrition from "./FetchNutrition";// Import the FetchNutrition component from the current directory
import Review from "./Review";// Import the Review component from the current directory
import Switch from '@mui/material/Switch'; // Import the Switch component from the @mui/material library
import FormGroup from '@mui/material/FormGroup'; // Import the FormGroup component from the @mui/material library
import FormControlLabel from '@mui/material/FormControlLabel';// Import the FormControlLabel component from the @mui/material library
import Button from '@mui/material/Button'; // Import the Button component from the @mui/material library
import Stack from '@mui/material/Stack';// Import the Stack component from the @mui/material library
import "../index.css" // Import the index.css file from the current directory

// Define the Item component, which takes in a prop called "food"
const Item = ({ food }) => {
  // Declare a state variable called "toggleNutrition" and a function to update it called "SetToggleNutrition"
const [toggleNutrition, SetToggleNutrition] = useState(false);
// Define a function to handle the change event of the Switch component
const handleChange = (event) => {
  // Set the value of "toggleNutrition" to the opposite of its current value when the Switch component is clicked
  SetToggleNutrition(!toggleNutrition);
};

  return (
    // Render the component
    
    <div>
      {/* The header of the accordion displays the name of the food */}
      <Accordion.Header> {food.name}</Accordion.Header>
      {/* The body of the accordion contains the rest of the information about the food */}
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
          <FormControlLabel control={<Switch onChange={handleChange} defaultunchecked />} label="Toggle Nutritional Data" />
        </FormGroup>
        {/* If the toggle switch is turned on, render the FetchNutrition component */}
        {toggleNutrition && <FetchNutrition query={food.name} />}
        <br></br>
        {/* Create a button to remove the food from the menu */}
        <Stack spacing={1} direction="row">
        <Button onClick={() =>  {food.menu.splice(0, food.menu.length)}} variant="contained" size="small">Remove from Menu</Button>
        </Stack>
        <br></br>
        <div class="rcorners">
        <Accordion>
          {/* Create an accordion within the ability to enter and display reviews */}
          <Accordion.Header>Reviews</Accordion.Header>
          <Accordion.Body>
            <p><Review food={food}/></p>
          </Accordion.Body>
        </Accordion>
        </div>
      </Accordion.Body>
</div>
 

); };

// Export the component to be used in other parts of the application
export default Item;
