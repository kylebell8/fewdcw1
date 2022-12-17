 import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import "../index.css"
const Review = ({ food }) => {
    const [reviewText, setReviewText] = useState("")
    const handleClick = () => {
        if (reviewText !== 0) {
            food.review.push(reviewText)
            console.log(food.review)
            setReviewText(0);
        }
    }
    return (
        <div className="cam-control">Review


            <Accordion.Body>
                <input type="number" value={reviewText} onChange={(e) => setReviewText(e.target.value)}>
                </input>
                <button onClick={() => handleClick()} disabled={reviewText === 0}> Add Review </button>
                <p>{food.review}</p>
            </Accordion.Body>
        </div>

    );
};
export default Review;