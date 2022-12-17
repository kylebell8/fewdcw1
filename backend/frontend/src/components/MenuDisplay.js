import React, { useEffect, useState, useReducer } from "react";
import CatagoryFilter from "./CategoryFilter"
function Search({ details }) {
    
    const menufilter = details.filter((entry) => {
        return entry.menu.includes("menu");
    });
    
    //use entry.menu = [] to know that the array is empty

    return (
        <div>
           {<CatagoryFilter details={menufilter} type={"menu"}/>}
        </div>
        
    );
}
export default Search;
