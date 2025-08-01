import feedback from "../public/feedback.json";

export default function CustomerRatings() {
  return (
    <div className="customer-feedback grid grid-cols-1 grid-auto-flow justify-center text-center p-4 my-6">
      <h1 className="text-2xl font-bold   tracking-normal md:text-5xl md:font-extrabold md:tracking-wide my-5">
        Our Customer Feedbacks
      </h1>
      <div className="feedback flex flex-col justify-between gap-4  md:flex-row">
        {feedback.map((feed) => (
          <div
            key={feed.id}
            className="customer-ratings flex flex-col items-center mt-5 p-5 w-[90%]"
          >
            <div className="feedback-item flex flex-col w-full  items-center md:w-[25vw] md:h-[13vh]  relative">
              <span className="stars absolute top-2 right-2">
                {"⭐".repeat(feed.stars)}
              </span>
              <span className="rating-text">
                <h2>{feed.name}</h2>
                <p className="">{feed.feedback}</p>
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
