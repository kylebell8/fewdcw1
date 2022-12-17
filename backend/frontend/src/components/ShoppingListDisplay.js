import React from "react";
import CatagoryFilter from "./CategoryFilter"
function shoppinglist({ details }) {
    const shoppingfilter = details.filter((entry) => {
        return entry.shopping.includes("shopping");
    });
    return (
        <div>
           
            <CatagoryFilter details={shoppingfilter} type={"shopping"}/>
        </div>
        
    );
}
export default shoppinglist;