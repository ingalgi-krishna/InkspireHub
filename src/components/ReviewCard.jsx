import React from 'react';
import '../css/review_card.css'; 
const renderStars = (rating) => {
    const totalStars = 5;
    let stars = [];
    for (let i = 0; i < totalStars; i++) {
        if (i < rating) {
            stars.push(<span key={i} className="star filled">★</span>);
        } else {
            stars.push(<span key={i} className="star">☆</span>);
        }
    }
    return stars;
}

const ReviewCard = ({ user, review, rating }) => {
    return (
        <div className="review-card">
            <div className="stars">{renderStars(rating)}</div>
            <p className="review">{review}</p>
            <p className="user">- {user}</p>
        </div>
    );
}

export default ReviewCard;
