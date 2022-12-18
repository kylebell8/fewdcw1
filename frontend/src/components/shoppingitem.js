import React from "react"; // Import the React library
import Accordion from 'react-bootstrap/Accordion'; // Import the Accordion component from the react-bootstrap library
import Button from '@mui/material/Button'; // Import the Button component from the @mui/material library
import Stack from '@mui/material/Stack'; // Import the Stack component from the @mui/material library
import "../index.css" // Import the index.css file

// Define the Item component, which takes in a prop called "food"
const Item = ({ food }) => {




  // Render a div element containing the Accordion.Header and Accordion.Body components from the react-bootstrap library, along with several elements containing dynamic content from the "food" prop
  return (
    <div>
      {/* Render the "name" property of the "food" object as the header of the Accordion component */}
      <Accordion.Header> {food.name}</Accordion.Header>
      <Accordion.Body>
        {/* Render the "category" property of the "food" object*/}
        <p>{food.category}</p>
        {/*Render the "allergens" property of the "food" object */}
        <p>Allergens Include: {food.allergens + " "} </p>

        <p>Ingredients Include:</p>
        {/* Map through the "ingredients" array of the "food" object, rendering the "food_ingredient" and "food_ingredientquantity" properties for each object in the array */}

        {food.ingredients.map((entry, i) => {
          return <div>
            {entry.food_ingredient}
            {" "}
            {entry.food_ingredientquantity}
          </div>
        })}


        <br></br>
        {/* Render a Stack component containing a Button component, which when clicked will remove all elements from the "shopping" array of the "food" object */}
        <Stack spacing={1} direction="row">
          <Button onClick={() => { food.shopping.splice(0, food.shopping.length) }} variant="contained" size="small">Remove from Shopping List</Button>
        </Stack>
        <br></br>
      </Accordion.Body>
    </div>


  );
};
// Export the Item component so it can be used in other parts of the application
export default Item;
