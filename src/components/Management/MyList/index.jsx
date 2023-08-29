export function MyList({ children }) {
  return (
    <div className="col-lg-4 col-md-8 col-sm-12">
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
