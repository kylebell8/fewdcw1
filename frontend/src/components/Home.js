import React from "react";

const Home = () => {
  return (
    <>
      <h1>Welcome!</h1>
      <p> McNulty's is a single-page web application for viewing and meddling with food recipes!</p>
      <img src={require('./assets/homepage.png')} alt="various food items"></img>
    </>
  );
};
export default Home;
