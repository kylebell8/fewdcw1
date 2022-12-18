import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import "../index.css"
const Review = ({ food }) => {
    const [reviewName, setReviewName] = useState("")
    const [reviewNumber, setReviewNumber] = useState("")
    const [reviewText, setReviewText] = useState("")
    const handleClick = () => {
        if (reviewName !== 0 && reviewNumber !== 0 && reviewText !== 0) {
            food.reviewName.push(reviewName) && food.reviewNumber.push(reviewNumber) && food.reviewText.push(reviewText)
            console.log(food.reviewName) 
            console.log(food.reviewNumber)
            console.log(food.reviewText)
            setReviewName("");
            setReviewNumber(0);
            setReviewText("0");
        }

                
                
    }
    return (
        <div className="cam-control">Review


            <Accordion.Body>
            
                <input type="text" value={reviewName} onChange={(e) => setReviewName(e.target.value)}placeholder="What is your name?">
                </input>
                <Stack spacing={1}>
                <Rating name="half-rating" value={reviewNumber} defaultValue={2.5} precision={0.5} onChange={(e) => setReviewNumber(e.target.value)}/>
                </Stack>
                <input type="text" value={reviewText} onChange={(e) => setReviewText(e.target.value)}placeholder="Leave a comment!">
                </input>
                
                <button onClick={() => handleClick()}> Add Review </button>
                
                <p>{food.reviewName}</p><p><Stack spacing={1}><Rating name="half-rating-read" value={food.reviewNumber} defaultValue={2.5} precision={0.5} readOnly /></Stack></p><p>{food.reviewText}</p>
            </Accordion.Body>
        </div>

    );
};
export default Review;