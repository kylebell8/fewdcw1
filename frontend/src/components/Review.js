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
            const UserReview = {
                reviewName: reviewName,
                reviewNumber: reviewNumber,
                reviewText: reviewText,
            }
            console.log(food.review)
            food.review.push(UserReview)
            setReviewName("");
            setReviewNumber(0);
            setReviewText("");
        }



    }
    return (
        <div className="cam-control">Review


            <Accordion.Body>

                <input type="text" value={reviewName} onChange={(e) => setReviewName(e.target.value)} placeholder="What is your name?">
                </input>
                <Stack spacing={1}>
                    <Rating name="half-rating" value={reviewNumber} defaultValue={2.5} precision={0.5} onChange={(e) => setReviewNumber(e.target.value)} />
                </Stack>
                <input type="text" value={reviewText} onChange={(e) => setReviewText(e.target.value)} placeholder="Leave a comment!">
                </input>

                <button onClick={() => handleClick()}> Add Review </button>


                {food.review.map((entry, i) => {
                    return <div>
                        <br></br>
                        {entry.reviewName}<br></br>
                        <p><Stack><Rating name="half-rating-read" value={entry.reviewNumber} readOnly /></Stack></p><br></br>
                        {entry.reviewText}<br></br>
                        <br></br>
                    </div>
                })}
            </Accordion.Body>
        </div>

    );
};
export default Review;
