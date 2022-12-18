import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Item from "./Item";
import MenuItem from "./MenuItem"
import Shoppingitem from "./shoppingitem"

const MenuItems = (params) => {
  const items = params.items
  return (
    <Accordion style={{width:50+'%'}}>
      {items.map((food, index) => {
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
export default MenuItems;
