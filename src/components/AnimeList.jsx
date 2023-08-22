export function AnimeList({ anime }) {
  console.log("anime: ", anime);
  return (
    <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="trending__anime">
        <div className="anime__item">
          <div className="anime__item__pic set-bg">
            <img src={anime.picture} alt={anime.picture} />
            <div className="ep">{anime.episodes}</div>
            <div className="comment">
              <i className="fa fa-comments"></i> 11
            </div>
            <div className="view">
              <i className="fa fa-eye"></i> 9141
            </div>
          </div>
          <div className="anime__item__text">
            <ul>
              {anime.tags.map((tag) => (
                <li>{tag.toUpperCase()}</li>
              ))}
            </ul>
            <h5>
              <p>{anime.title}</p>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
