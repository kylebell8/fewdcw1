import { useEffect } from 'react'; // Import the React library
import Filter from "./Filter" // Import the Filter component

const MenuRecipe = ({ details }) => {
    useEffect(() => {
      // This will trigger a re-render when the entry.menu array changes
    }, [details]);
  
    // Create a new array called "menufilter" which includes only the objects in "details" where the "menu" property includes the string "menu"
    const menufilter = details.filter((entry) => {
        return entry.menu.includes("menu");
    });
  
    // Render a div element which contains the Filter component, passing in the filtered "menufilter" array as the "details" prop and the string "menufilter" as the "type" prop
    return (
      <div>
        <Filter details={menufilter} type={"recipemenu"}/>
      </div>
    );
  };
  export default MenuRecipe;