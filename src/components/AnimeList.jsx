import { AnimeStats } from "./AnimeStats";
import { AnimeThumbnail } from "./AnimeThumbnail";

export function AnimeList({ anime }) {
  console.log("anime: ", anime);
  return (
    <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="trending__anime">
        <div className="anime__item">
          <AnimeStats anime={anime} />
          <AnimeThumbnail anime={anime} />
        </div>
      </div>
    </div>
  );
}
