import React, { useState, useEffect } from "react";
import RecipeItems from "./RecipeItems";
import "../index.css"

function Search(params) {
  const details = params.details
  const [searchField, setSearchField] = useState("");
  const [filterDairy, setFilterDairy] = useState(false);
  const [filterGluten, setFilterGluten] = useState(false);
  const [filterNuts, setFilterNuts] = useState(false);
  const [filterVegan, setFilterVegan] = useState(false);
  const [filterVegetarian, setFilterVegetarian] = useState(false);
  const [displayData, setDisplayData] = useState("");
  const [ingredientsField, setIngredientsField] = useState("");

  const combinedFiltered = details.filter((entry) => {
    console.log(entry)
    return entry.name.toLowerCase().includes(searchField.toLowerCase()) &&
      entry.ingredients.some((item) => { return item.food_ingredient.toLowerCase().includes(ingredientsField.toLowerCase()) })
  });

  let result = combinedFiltered;

  const dairyData = (data) => {
    return data.filter((entry) => {
      return !entry.allergens.includes("Dairy")
    })

  }
  const glutenData = (data) => {
    return data.filter((entry) => {
      return !entry.allergens.includes("Gluten")
    })

  }
  const nutsData = (data) => {
    return data.filter((entry) => {
      return !entry.allergens.includes("Nuts")
    })

  }
  const veganData = (data) => {
    return data.filter((entry) => {
      return entry.vegan.includes("vegan")
    })

  }
  const vegetarianData = (data) => {
    return data.filter((entry) => {
      return entry.vegetarian.includes("vegetarian")
    })

  }

  useEffect(() => {
    if (!filterDairy && !filterGluten && !filterNuts && !filterVegan && !filterVegetarian) {
      setDisplayData(combinedFiltered)
    }

    else {

      if (filterDairy) {
        result = dairyData(result)
      }
      if (filterGluten) {
        result = glutenData(result)
      }
      if (filterNuts) {
        result = nutsData(result)
      }
      if (filterVegan) {
        result = veganData(result)
      }
      if (filterVegetarian) {
        result = vegetarianData(result)
      }
      setDisplayData(result)
    }
  }, [searchField, ingredientsField, filterDairy, filterGluten, filterNuts, filterVegan, filterVegetarian])


  return (
    <div>
      <div class="search-bar">
        <input
          className="form-control"
          type="text"
          placeholder="Search ..."
          onChange={(e) => setSearchField(e.target.value)}
          style={{width:70+'%'}}
          />
      </div>

      <div class="search-bar">
        <input
          className="form-control"
          type="text"
          placeholder="Search Recipe Ingredient"
          onChange={(e) => setIngredientsField(e.target.value)}
          style={{width:50+'%'}}/>
        
      </div>
<div class="flex-container">
      <div class="filterformatting" >
      Filter by Allergen
      <div> <label class="filtertext"> Dairy </label> <input type="checkbox" value={filterDairy} onClick={() => setFilterDairy(!filterDairy)} /></div>
      <div> <label class="filtertext"> Gluten </label> <input type="checkbox" value={filterGluten} onClick={() => setFilterGluten(!filterGluten)} /></div>
      <div> <label class="filtertext"> Nuts </label> <input type="checkbox" value={filterNuts} onClick={() => setFilterNuts(!filterNuts)} /></div>
      </div>
      
      <div class="filterformatting">
      Filter by Diet
      <div> <label class="filtertext"> Vegan </label> <input type="checkbox" value={filterVegan} onClick={() => setFilterVegan(!filterVegan)} /></div>
      <div> <label class="filtertext"> Vegetarian </label> <input type="checkbox" value={filterVegetarian} onClick={() => setFilterVegetarian(!filterVegetarian)} /></div>
      </div>
      </div>
      {displayData && <>
        {params.type === "recipe" && <RecipeItems type={"recipe"} items={displayData} />}
        {params.type === "shopping" && <RecipeItems type={"shopping"} items={displayData} />}
        {params.type === "menu" && <RecipeItems type={"menu"} items={displayData} />}
      </>}
    </div>


  );



}
export default Search;
