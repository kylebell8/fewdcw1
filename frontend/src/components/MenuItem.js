import React, { useState} from "react";
import Accordion from 'react-bootstrap/Accordion';
import FetchNutrition from "./FetchNutrition";
import Review from "./Review";
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "../index.css"

const Item = ({ food }) => {
const [OpenNutrition, SetOpenNutrition] = useState(false);

const handleChange = (event) => {
  SetOpenNutrition(!OpenNutrition);
};

  return (
    <div>
      
      <Accordion.Header> {food.name}</Accordion.Header>
      
      <Accordion.Body>
        <p>{food.category}</p>
        <p>{food.description}</p>
        <p>{food.price}</p>
        <p>Allergens Include: {food.allergens + " "} </p>
        <FormGroup>
          <FormControlLabel control={<Switch onChange={handleChange} defaultunchecked />} label="Toggle Nutritional Data" />
        </FormGroup>
        {OpenNutrition && <FetchNutrition query={food.name} />}
        
        <Stack spacing={1} direction="row">
        <Button onClick={() =>  {food.menu.splice(0, food.menu.length)}} variant="contained" size="small">Remove from Menu</Button>
        </Stack>
        <Accordion>
          <Accordion.Header>Reviews</Accordion.Header>
          <Accordion.Body>
            <p><Review food={food}/></p>
          </Accordion.Body>
        </Accordion>
      </Accordion.Body>
</div>


); };
export default Item;
