import React, { useState } from "react"; // Import the React library and the useState hook
import Accordion from 'react-bootstrap/Accordion'; // Import the Accordion component from the react-bootstrap library
import Rating from '@mui/material/Rating'; // Import the Rating component from the @mui/material library
import Stack from '@mui/material/Stack'; // Import the Stack component from the @mui/material library
import Button from '@mui/material/Button'; // Import the Button component from the @mui/material library
import "../index.css" // Import the index.css file

// Define the Review component, which takes in a prop called "food"
const Review = ({ food }) => {
    // Declare state variables to store the user's input
    const [reviewName, setReviewName] = useState("")
    const [reviewNumber, setReviewNumber] = useState("")
    const [reviewText, setReviewText] = useState("")

    // Function to handle the submission of a new review
    const handleClick = () => {
        // Check if all required fields are filled
        if (reviewName !== "" && reviewNumber !== 0 && reviewText !== "") {
            // Create a new review object with the user's input
            const UserReview = {
                reviewName: reviewName,
                reviewNumber: reviewNumber,
                reviewText: reviewText,
            }
            // Add the review to the "review" array of the "food" object
            food.review.push(UserReview)
            // Reset the state variables to their initial values
            setReviewName("");
            setReviewNumber(0);
            setReviewText("");
        }



    }
    return (
        <div>

            {/* Render an Accordion component from the react-bootstrap library */}
            <Accordion.Body>
                {/* Render an input field for the user to enter their name */}
                <input type="text" class="reviewtext" value={reviewName} onChange={(e) =>
                    setReviewName(e.target.value)} placeholder="What is your name?">
                </input>
                {/* Render a Stack component from the @mui/material library that contains a Rating component for the user to select their rating */}
                <Stack spacing={1}>
                    <Rating name="half-rating" value={reviewNumber} defaultValue={2.5} precision={0.5} onChange={(e) =>
                        setReviewNumber(e.target.value)} />
                </Stack>
                {/* Render an input field for the user to enter their review text */}
                <input type="text" class="reviewtext" value={reviewText} onChange={(e) =>
                    setReviewText(e.target.value)} placeholder="Leave a comment!">
                </input>
                {/* Render a Button component from the @mui/material library for the user to submit their review */}
                <div class="padbutton">
                    <Stack spacing={1} direction="row">
                        <Button onClick={() => handleClick()} variant="contained" size="small">Add Review</Button>
                    </Stack>
                </div>
                {/* Map over the "review" array of the "food" object and render each review with the user's name, rating, and review text */}
                {food.review.map((entry, i) => {
                    return <div>
                        <br></br>
                        {entry.reviewName}<br></br>
                        {/* Render a Stack component that contains a read-only Rating component for each review */}
                        <p><Stack><Rating name="half-rating-read" value={entry.reviewNumber} readOnly /></Stack></p>
                        <br></br>
                        {entry.reviewText}<br></br>
                        <br></br>
                    </div>
                })}
            </Accordion.Body>
        </div>

    );
};

//exports the Review component to be used by other components
export default Review;
