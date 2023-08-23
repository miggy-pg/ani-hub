export function AnimeWatchedBar({ displayAnime }) {
  console.log("displayAnime: ", displayAnime);
  return (
    <div className="filter__gallery">
      <div className="anime__sidebar__view__item set-bg">
        <img src={displayAnime.picture} alt="" />
        <div className="ep">18 / ?</div>
        <div className="view">
          <i className="fa fa-eye"></i> 9141
        </div>
        <h5>
          <p>Boruto: Naruto next generations</p>
        </h5>
      </div>
    </div>
  );
}
