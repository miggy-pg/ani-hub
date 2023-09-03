function average(array) {
  return array.reduce((x, y) => x + y, 0) / array.length;
}

export function MyList({ favorite, onDelete, children }) {
  const countMovies = favorite?.length;
  const avgRating = average(
    favorite.map((anime) => Number(anime.attributes.averageRating))
  );
  const avgUserRating = average(favorite.map((anime) => anime.rating));

  return (
    <div className="col-lg-4 col-md-8 col-sm-12">
      <div className="anime__sidebar">
        <div className="anime__sidebar__view">
          <div className="section-title">
            <h5>My List:</h5>
          </div>
          {children}
        </div>

        <div className="anime__sidebar__favorite my-list">
          <span className="my-list-title">
            <h5>Favorites: </h5>
          </span>
          <div className="row anime-statistics">
            <span>🎥 {countMovies} movies</span>
            <span>💟 {avgUserRating ? avgUserRating : 0}</span>
            <span>📈 {avgRating ? avgRating.toFixed(2) : 0} min</span>
          </div>
          {favorite?.length > 0 &&
            favorite?.map((anime) => (
              <div className="my-favorites-list" key={anime.attributes.slug}>
                <img
                  src={anime.attributes.posterImage.small}
                  alt={anime.attributes.titles.en}
                />
                <div className="col">
                  <span className="row title">
                    {anime.attributes.titles.en}
                  </span>
                  <div className="favorite-anime-details row">
                    <p>💟 {anime.rating}</p>
                    <p>⏲ {anime.attributes.averageRating}</p>
                  </div>
                </div>
                <span className="close" onClick={() => onDelete(anime.id)}>
                  x
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
