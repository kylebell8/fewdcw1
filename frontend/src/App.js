import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/AppBar";
import Home from "./components/Home";
import CategoryFilter from "./components/Filter"
import Item from "./components/Item";
import NoPage from "./components/NoPage";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuFilter from "./components/MenuDisplay"
import ShoppingFilter from "./components/ShoppingListDisplay"

export default function App() {

  const [foods, setFoods] = useState([{

    id: "",
    name: "",
    description: "",
    category: "",
    ingredients: [],
    allergens: [],
    vegan: "",
    vegetarian: "",
    instructions: [],
    review: [],
    menu: [],
    shopping: []
  }]);

  const touchData = useCallback(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((incomingData) => {
        console.log(incomingData)
        setFoods(incomingData);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    touchData();
  }, [touchData]);
  
  return (
    <BrowserRouter>
    <Layout/>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="recipes" element={<CategoryFilter details={foods} type={"foodrecipe"} />} >
            <Route path=":itemId" element={<Item items={foods} />} />
          </Route>
          <Route path="/menus" element={<MenuFilter details={foods} />}>
          </Route>
          <Route path="/shopping" element={<ShoppingFilter details={foods} />}>
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}
