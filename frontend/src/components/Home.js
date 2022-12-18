// This code imports the React library and the index.css file
import React from "react";
import "../index.css"

// This is a functional component called Home that returns a JSX element when called
const Home = () => {
  // The JSX element consists of an h1 tag with the class "homeformat", a p tag with the class "homeformat", and an img tag with the class "imghome"
  return (
    <>
      <h1 class="homeformat">Welcome!</h1>
      <p class="homeformat"> McNulty's is a single-page web application for viewing and meddling with food recipes!</p>
      <img class="imghome" src={require('./assets/homepage.png')} alt="various food items"></img>
    </>
  );
};
// This line of code exports the Home component so it can be used in other parts of the application
export default Home;
