import AnimeOfflineDatabase from "../assets/anime-offline-database.json";

export function AnimeWatchedBar({ displayAnime }) {
  let findAnime = AnimeOfflineDatabase.data.find(
    (anime) => anime.title === displayAnime
  );
  console.log("findAnime: ", findAnime);
  console.log("displayAnime: ", displayAnime);
  return (
    <div className="filter__gallery">
      <div className="anime__sidebar__view__item set-bg">
        <img
          src={findAnime && findAnime.picture ? findAnime.picture : null}
          alt=""
        />
        <div className="ep">18 / ?</div>
        <div className="view">
          <i className="fa fa-eye"></i> 9141
        </div>
        <h5>
          <p>{findAnime && displayAnime.title}</p>
        </h5>
      </div>
    </div>
  );
}
