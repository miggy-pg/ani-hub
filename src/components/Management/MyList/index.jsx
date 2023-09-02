export function MyList({ favorite, children }) {
  // const avgRating = average()
  // const avgUserRating = average()
  // const avgRunTime = average();

  return (
    <div className="col-lg-4 col-md-8 col-sm-12">
      <div className="anime__sidebar">
        <div className="anime__sidebar__view">
          <div className="section-title">
            <h5>My List:</h5>
          </div>
          {children}
        </div>

        <div className="anime__sidebar my-list">
          <span className="my-list-title">
            <h5>Favorites: </h5>
          </span>
          <div className="row anime-statistics">
            <span>🎥 0 movies</span>
            <span>💟 0</span>
            <span>⏱ 0 min</span>
          </div>
          {favorite?.length > 0 &&
            favorite?.map((anime) => (
              <div class="leaderboard__profile">
                <img
                  src={anime.attributes.posterImage.small}
                  alt={anime.attributes.titles.en}
                  class="leaderboard__picture"
                />
                <span class="leaderboard__name">
                  {anime.attributes.titles.en}
                </span>
                <span class="leaderboard__value">
                  9.9<span>B</span>
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
