import React from "react";
import CatagoryFilter from "./CategoryFilter"

function DisplayShopping({ details }) {
    
    const shoppingtrue = details.filter((entry) => {
        return entry.shopping.includes("shopping");
    });

    return (
        <div>
           
            <CatagoryFilter details={shoppingtrue} type={"shopping"}/>

        </div>
        
    );
}
export default DisplayShopping;