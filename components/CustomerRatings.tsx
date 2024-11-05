import feedback from '../public/feedback.json'


export default function CustomerRatings() { 
    return (
      <div className="customer-feedback">
        <h1>Our Customer Feedbacks</h1>
        <div className="feedback">
          {feedback.map((feed) => ( 
            <div key={feed.id} className="customer-ratings">
            <div className="feedback-item relative">
              <span className="stars absolute top-2 right-2">{'⭐'.repeat(feed.stars)}</span>
              <span className="rating-text">
                <h2>{feed.name}</h2>
                <p>{feed.feedback}</p>
              </span>
              <div className="rating-profile">
                <img src={feed.image} alt={`Customer feedback ${feed.id}`} />
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  }
  