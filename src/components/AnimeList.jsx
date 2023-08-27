import { AnimeStats } from "./AnimeStats";
import { AnimeThumbnail } from "./AnimeThumbnail";

export function AnimeList({ anime, handleSelectedAnime }) {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="trending__anime">
        <div
          style={{ cursor: "pointer" }}
          className="anime__item"
          onClick={() => anime && handleSelectedAnime(anime.title)}
        >
          <AnimeStats anime={anime} />
          <AnimeThumbnail anime={anime} />
        </div>
      </div>
    </div>
  );
}
