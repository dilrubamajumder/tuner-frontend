import { useState } from "react";
import ReviewForm from "./ReviewForm";
import react from "react";

function Review({ review, handleDelete, handleSubmit }) {
  const { id, reviewer, title, content, rating } = review;
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  return (
    <div className="Review">
      {viewEditForm ? (
          <ReviewForm
          reviewDetails={review}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
          ) : (
              <div>
          <div>
            {title}: <span>{rating}</span>
          </div>
          <h5>{reviewer}</h5>
          <p>{content}</p>
          <button onClick={() => handleDelete(id)}>Delete</button>
          <button onClick={toggleView}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Review;
