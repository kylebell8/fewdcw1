import React, { useEffect, useState, useCallback } from "react";
import Nutrition from "./Nutrition";
import BarChart from "./NutritionChart";

const FetchData = ({ query }) => {
  const [nutrition, setNutrition] = useState({
    sugar_g: 0,
    fiber_g: 0,
    serving_size_g: 0,
    sodium_mg: 0,
    name: 0,
    potassium_mg: 0,
    fat_saturated_g: 0,
    fat_total_g: 0,
    calories: 0,
    cholesterol_mg: 0,
    protein_g: 0,
    carbohydrates_total_g: 0,
  });

  const [chartData, setChartData] = useState({
    labels: ["sugar", "fiber", "saturated fat", "total fat", "protein"],
    datasets: [
      {
        label: "per serving in g",
        data: [0, 0, 0, 0, 0],
        backgroundColor: ["#ffbb11", "#ec02f1", "#50AF95", "#03ba6f", "#2a71d0"],
      },
    ],

  });

  const fetchData = useCallback(() => {
    const url =
      "https://calorieninjas.p.rapidapi.com/v1/nutrition?query=" + query;
    console.log(url);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "59a1ed6959mshd3995aae4929d99p14e246jsnd8b7b3daa451",
        "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((incomingData) => {
        console.log(incomingData);
        if (incomingData.items.length !== 0)
          setNutrition(incomingData.items[0]);
        let filteredData = [
          incomingData.items[0].sugar_g,
          incomingData.items[0].fiber_g,
          incomingData.items[0].fat_saturated_g,
          incomingData.items[0].fat_total_g,
          incomingData.items[0].protein_g,
        ];
        let filteredLabels = [
          "sugar",
          "fiber",
          "saturated fat",
          "total fat",
          "protein",
        ];
        setChartData({
          labels: filteredLabels,
          datasets: [
            {
              label: "per serving of " + incomingData.items[0].name + " in g",
              data: filteredData,
              backgroundColor: [
                "#ffbb11",
                "#ec02f1",
                "#50AF95",
                "#03ba6f",
                "#2a71d0",
              ],
            },
          ],
        });
      })
      .catch((err) => console.error(err));
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [fetchData, query]);

  return (
    <div>
      <Nutrition item={nutrition} />
      <BarChart data={chartData} />
    </div>
  );
  
};



export default FetchData;
