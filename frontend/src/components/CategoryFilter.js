import React, { useState, useEffect } from "react";
import RecipeItems from "./RecipeItems";
//test
function Search(params) {
  const details = params.details
  const [searchField, setSearchField] = useState("");
  const [filterDairy, setFilterDairy] = useState(false);
  const [filterGluten, setFilterGluten] = useState(false);
  const [filterNuts, setFilterNuts] = useState(false);
  const [displayData, setDisplayData] = useState("");
  const [descriptionField, setDescriptionField] = useState("");

  const filtered = details.filter((entry) => {
    return entry.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const getData = (data, target) => {
    return data.filter((entry) => {
      return entry.ingredients.every((item) => {
        return item.food_ingredient.toLowerCase().includes(descriptionField.toLowerCase());
      });
    });
  };

const combinedFiltered = details.filter((entry) => {
  console.log(entry)
  return entry.name.toLowerCase().includes(searchField.toLowerCase()) &&
  entry.ingredients.some((item) => { return item.food_ingredient.includes(descriptionField)})
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

  useEffect(() => {
    if (!filterDairy && !filterGluten && !filterNuts) {
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
      setDisplayData(result)
    }
  }, [searchField, descriptionField, filterDairy, filterGluten, filterNuts])


  return (
    <div>
      <div> <input
        className="form-control"
        type="text"
        placeholder="Search ..."
        onChange={(e) => setSearchField(e.target.value)}
      /> </div>

<div>
  <input
    className="form-control"
    type="text"
    placeholder="Search Recipe Descriptions"
    onChange={(e) => setDescriptionField(e.target.value)}
  />
</div>

      <div> <label> Dairy </label> <input type="checkbox" value={filterDairy} onClick={() => setFilterDairy(!filterDairy)}/></div>
      <div> <label> Gluten </label> <input type="checkbox" value={filterGluten} onClick={() => setFilterGluten(!filterGluten)}/></div>
      <div> <label> Nuts </label> <input type="checkbox" value={filterNuts} onClick={() => setFilterNuts(!filterNuts)}/></div>

      {displayData && <>
        {params.type === "recipe" && <RecipeItems type={"recipe"} items={displayData} />}
        {params.type === "shopping" && <RecipeItems type={"shopping"} items={displayData} />}
        {params.type === "menu" && <RecipeItems type={"menu"} items={displayData} />}
      </>}
    </div>


  );



}
export default Search;
