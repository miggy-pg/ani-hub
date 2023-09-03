import { StarRating } from "../StarRating";

const titleStyle = {
  fontSize: "1.4rem",
  color: "#fff",
  margin: "0 0 0 1rem",
  padding: "0",
};

export function Rating({ rating, tempRating, setRating, setTempRating }) {
  return (
    <>
      <div className="rating">
        {Array.from({ length: 5 }, (_, i) => (
          <StarRating
            key={i}
            onClickStar={() => setRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
      </div>
      <p style={titleStyle}>{tempRating || rating || 0}</p>
    </>
  );
}
