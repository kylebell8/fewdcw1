import React from "react";

const Home = () => {
  return (
    <>
      <h1 class="homeformat">Welcome!</h1>
      <p class="homeformat"> McNulty's is a single-page web application for viewing and meddling with food recipes!</p>
      <img src={require('./assets/homepage.png')} alt="various food items"></img>
    </>
  );
};
export default Home;
