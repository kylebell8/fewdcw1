import React, { useState, useEffect } from "react";
import RecipeItems from "./RecipeItems";
import Checkbox from '@mui/material/Checkbox';
import "../index.css"
//handle imports

function Search(parameters) {
  const details = parameters.details
  // Declare a state variable called details and assign it the value of the details prop passed to the component
  // Declare state variables searchValue, filterDairy, filterGluten, filterNuts, filterVegan, filterVegetarian, recipeData, and ingredientsValue and set their initial values using useState
  const [searchValue, setSearchValue] = useState("");
  const [filterDairy, setFilterDairy] = useState(false);
  const [filterGluten, setFilterGluten] = useState(false);
  const [filterNuts, setFilterNuts] = useState(false);
  const [filterVegan, setFilterVegan] = useState(false);
  const [filterVegetarian, setFilterVegetarian] = useState(false);
  const [recipeData, setRecipeData] = useState("");
  const [ingredientsValue, setIngredientsValue] = useState("");


  // Declare a variable called finalFilter which is a filtered version of details based on the values of searchValue and ingredientsValue
  const finalFilter = details.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchValue.toLowerCase()) &&
    recipe.ingredients.some((item) => { return item.food_ingredient.toLowerCase().includes(ingredientsValue.toLowerCase()) })
      console.log(recipe)
  });

  let filter = finalFilter;


  // These functions are called when the corresponding checkbox is checked. 
  // They filter the `data` passed to them by removing any entries that contain the specified allergen.
  const dairyData = (data) => {
    return data.filter((recipe) => {
      return !recipe.allergens.includes("Dairy")
    })

  }
  const glutenData = (data) => {
    return data.filter((recipe) => {
      return !recipe.allergens.includes("Gluten")
    })

  }
  const nutsData = (data) => {
    return data.filter((recipe) => {
      return !recipe.allergens.includes("Nuts")
    })

  }

  // These functions are called when the corresponding checkbox is checked. 
  // They filter the `data` passed to them by removing any entries that are not vegan or vegetarian, respectively.
  const veganData = (data) => {
    return data.filter((recipe) => {
      return recipe.vegan.includes("vegan")
    })

  }
  const vegetarianData = (data) => {
    return data.filter((recipe) => {
      return recipe.vegetarian.includes("vegetarian")
    })

  }

  // This effect is called whenever any of the dependencies in the second argument are changed.
  // It checks whether any of the filter checkboxes are checked. If none of them are checked, 
  // it sets `recipeData` to `finalFilter`. 
  // If any of the checkboxes are checked, it filters `filter` using the corresponding function 
  // (e.g. `dairyData` if `filterDairy` is `true`) and sets `recipeData` to the filtered `filter`.
  useEffect(() => {
    const filters = {
      filterDairy: dairyData,
      filterGluten: glutenData,
      filterNuts: nutsData,
      filterVegan: veganData,
      filterVegetarian: vegetarianData,
    };
  
    let activeFilters = [];
    for (let filter in filters) {
      if (eval(filter)) {
        activeFilters.push(filters[filter]);
      }
    }
  
    let filteredData = finalFilter;
    activeFilters.forEach((filterFn) => {
      filteredData = filterFn(filteredData);
    });
    setRecipeData(filteredData);
  }, [searchValue, ingredientsValue, filterDairy, filterGluten, filterNuts, filterVegan, filterVegetarian]);


  return (
    <div>
      {/* Search field for searching by recipe name */}
      <div class="search-bar">
        <input
          className="form-control"
          type="text"
          placeholder="Search via recipe name"
          onChange={(e) => setSearchValue(e.target.value)}
          style={{ width: 70 + '%' }}
        />
      </div>

      <div class="search-bar">
        {/* Search field for searching by recipe ingredients */}
        <input
          className="form-control"
          type="text"
          placeholder="Search via recipe ingredient"
          onChange={(e) => setIngredientsValue(e.target.value)}
          style={{ width: 50 + '%' }} />

      </div>
      {/* Checkbox filters for allergen and diet preferences */}
      <div class="flex-container">
        <div class="filterformatting" >
          Filter by Excluding Allergen

          <div> <label class="filtertext"> Dairy </label> 
          <Checkbox value={filterDairy} onClick={() => setFilterDairy(!filterDairy)} />
          </div>
          <div> 
            <label class="filtertext"> Gluten </label> 
          <Checkbox value={filterGluten} onClick={() => setFilterGluten(!filterGluten)} />
          </div>
          <div> 
            <label class="filtertext"> Nuts </label> 
          <Checkbox value={filterNuts} onClick={() => setFilterNuts(!filterNuts)} />
          </div>

        </div>

        <div class="filterformatting">
          Filter by Diet
          <div> <label class="filtertext"> Vegan </label> <Checkbox value={filterVegan} onClick={() => setFilterVegan(!filterVegan)} /></div>
          <div> <label class="filtertext"> Vegetarian </label> <Checkbox value={filterVegetarian} onClick={() => setFilterVegetarian(!filterVegetarian)} /></div>
        </div>
      </div>
      

      {/* Render RecipeItems component based on the type specified in the parameters object */}
      {recipeData && <>{parameters.type === "foodrecipe" && 
      <RecipeItems type={"foodrecipe"} items={recipeData}/>}
        {parameters.type === "recipemenu" && 
        <RecipeItems type={"recipemenu"} items={recipeData} />}
        {parameters.type === "shoppinglist" && 
        <RecipeItems type={"shoppinglist"} items={recipeData} />}
      </>}
    </div>


  );



}
// This line of code exports the Home component so it can be used in other parts of the application
export default Search;
