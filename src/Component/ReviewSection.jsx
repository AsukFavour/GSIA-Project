// ReviewSection.js
import React from 'react';
import '../Styles/ReviewSection.css';

const ReviewSection = () => {
  // Sample reviews
  const reviews = [
    {
      id: 1,
      author: 'John Doe',
      content: 'GSIA has been a transformative experience for me. The faculty is dedicated, and the curriculum is well-designed.',
    },
    {
      id: 2,
      author: 'Jane Smith',
      content: 'I appreciate the supportive community at GSIA. The extracurricular activities are diverse, and the learning environment is excellent.',
    },
    {
      id: 3,
      author: 'Sam Johnson',
      content: 'Choosing GSIA for my education was the best decision. The infrastructure and facilities are top-notch, providing a holistic learning experience.',
    },
  ];

  return (
    <div className="review-section">
      <h2>Student Reviews</h2>
      <div className="review-cards">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <p className="review-content">{review.content}</p>
            <p className="review-author">- {review.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
