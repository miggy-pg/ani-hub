export function AnimeReview({ children }) {
  return (
    <div className="col-lg-12 col-md-12 col-sm-8">
      <div className="anime__sidebar">
        <div className="anime__sidebar__view">
          <div className="section-title">
            <h5>My List:</h5>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
