import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

const BarChart = ({ data }) => {
  


  return (<>
    <Bar
      data={data}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Nutritional Data ",
          },
          legend: {
            display: true,
            position: "bottom",
          },
        },
      }}
    />
    <Pie
      data={data}
    />
    </>
  );
};
export default BarChart;
