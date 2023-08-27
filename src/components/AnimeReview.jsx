export function AnimeReview({ children }) {
  return (
    <div className="anime__sidebar">
      <div className="anime__sidebar__view">
        <div className="section-title">
          <h5>My List:</h5>
        </div>
        {children}
      </div>
    </div>
  );
}
