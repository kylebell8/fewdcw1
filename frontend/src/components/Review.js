import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "../index.css"

const Review = ({ food }) => {
    const [reviewName, setReviewName] = useState("")
    const [reviewNumber, setReviewNumber] = useState("")
    const [reviewText, setReviewText] = useState("")

    
    const handleClick = () => {
        if (reviewName !=="" && reviewNumber !== 0 && reviewText !=="") {
            const UserReview = {
                reviewName: reviewName,
                reviewNumber: reviewNumber,
                reviewText: reviewText,
            }
            food.review.push(UserReview)
            setReviewName("");
            setReviewNumber(0);
            setReviewText("");
        }



    }
    return (
        <div>


            <Accordion.Body>

                <input type="text" value={reviewName} onChange={(e) => 
                    setReviewName(e.target.value)} placeholder="What is your name?">
                </input>

                <Stack spacing={1}>
                    <Rating name="half-rating" value={reviewNumber} defaultValue={2.5} precision={0.5} onChange={(e) => 
                        setReviewNumber(e.target.value)} /> 
                </Stack>
                 
                <input type="text" value={reviewText} onChange={(e) => 
                    setReviewText(e.target.value)} placeholder="Leave a comment!">
                </input>
                <div class="padbutton">
                <Stack spacing={1} direction="row">
                <Button onClick={() =>  handleClick()} variant="contained" size="small">Add Review</Button>
                </Stack>
                </div>
            {/*Change the below brs to not be there this is poor styling */}

                {food.review.map((entry, i) => {
                    return <div>
                        <br></br>
                        {entry.reviewName}<br></br>
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
export default Review;
