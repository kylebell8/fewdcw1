import React from "react";
import Filter from "./Filter"

// The Search component takes in an array of details as a prop and filters it based on whether the entry is in the menu
function Search({ details }) {
    
    // Filter the details array to only include entries that have "menu" in their menu field
    const menufilter = details.filter((entry) => {
        return entry.menu.includes("menu");
    });
    
  // Return a div containing the Filter component with the filtered details array and the type "recipemenu"
    return (
        <div>
           {<Filter details={menufilter} type={"recipemenu"}/>}
        </div>
        
    );
}
export default Search;
